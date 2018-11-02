using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Capstone_Project.ViewModels
{
    public class GroupViewModel
    {
        public string name { get; set; }
        public int groupId { get; set; }
        public int[] members { get; set; }
        public string[] memberNames { get; set; }
        public int travellerId { get; set; }
    }
}