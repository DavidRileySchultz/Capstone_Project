using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Capstone_Project.Models;
using Capstone_Project.ViewModels;
using Capstone_Project.Data;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Capstone_Project.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class GroupsController : ControllerBase
    {
        private readonly ApplicationDbContext _context;
        public GroupsController(ApplicationDbContext context)
        {
            _context = context;
        }

        // POST: api/Groups
        [HttpPost("[action]")]
        public async Task<IActionResult> Create([FromBody] GroupViewModel data)
        {
            if (data != null)
            {
                try
                {
                    Group group = new Group();                    
                    group.Name = data.name;
                    group.GroupId = data.groupId;
                    _context.Groups.Add(group);
                    await _context.SaveChangesAsync();
                    int thisGroupId = FindGroupIdByName(data.name);
                    return Ok();
                }
                catch
                {
                    throw new System.Web.Http.HttpResponseException(System.Net.HttpStatusCode.InternalServerError);
                }
            }
            else
            {
                return NoContent();
            }
        }

        [HttpGet("[action]")]
        public ShowGroupViewModels GetGroups(int id)
        {
            var groups = GetGroupsByTravellerId(id);
            List<ShowGroupViewModel> groupsIn = CreateGroupsInSnapshotForClient(groups);
            ShowGroupViewModels all = new ShowGroupViewModels();
            all.groupsIn = groupsIn;
            return all;
        }

        private List<Group> GetGroupsByTravellerId(int id)
        {
            return _context.GroupMembers.Where(a => a.TravellerId == id)
                .Join(_context.Groups, a => a.GroupId, b => b.GroupId, (a, b) => new { a, b })
                .Select(c => c.b).ToList();
        }

        private int FindGroupIdByName(string groupName)
        {
            var thisGroup = _context.Groups.Where(a => a.Name == groupName).ToList();
            if (thisGroup.Count() > 1)
            {
                thisGroup = thisGroup.OrderByDescending(a => a.GroupId).ToList();
            }
            int thisGroupId = thisGroup[0].GroupId;
            return thisGroupId;
        }

        private List<ShowGroupViewModel> CreateGroupsInSnapshotForClient(List<Group> groups)
        {
            List<ShowGroupViewModel> snapshots = new List<ShowGroupViewModel>();
            foreach (Group group in groups)
            {
                ShowGroupViewModel snapshot = new ShowGroupViewModel();
                snapshot.Id = group.GroupId;
                snapshot.Name = group.Name;
                snapshots.Add(snapshot);
            }
            return snapshots;
        }
    }
}