using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Capstone_Project.Data;
using Capstone_Project.Models;

namespace Capstone_Project.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class JournalsController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public JournalsController(ApplicationDbContext context)
        {
            _context = context;
        }

        // GET: api/Journals
        [HttpGet]
        public IEnumerable<JournalEntry> GetJournalEntries()
        {
            return _context.JournalEntries;
        }

        // GET: api/Journals/5
        [HttpGet("{id}")]
        public async Task<IActionResult> GetJournalEntry([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var journalEntry = await _context.JournalEntries.FindAsync(id);

            if (journalEntry == null)
            {
                return NotFound();
            }

            return Ok(journalEntry);
        }

        // PUT: api/Journals/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutJournalEntry([FromRoute] int id, [FromBody] JournalEntry journalEntry)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != journalEntry.EntryId)
            {
                return BadRequest();
            }

            _context.Entry(journalEntry).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!JournalEntryExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Journals
        [HttpPost]
        public async Task<IActionResult> PostJournalEntry([FromBody] JournalEntry journalEntry)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            _context.JournalEntries.Add(journalEntry);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetJournalEntry", new { id = journalEntry.EntryId }, journalEntry);
        }

        // DELETE: api/Journals/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteJournalEntry([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var journalEntry = await _context.JournalEntries.FindAsync(id);
            if (journalEntry == null)
            {
                return NotFound();
            }

            _context.JournalEntries.Remove(journalEntry);
            await _context.SaveChangesAsync();

            return Ok(journalEntry);
        }

        private bool JournalEntryExists(int id)
        {
            return _context.JournalEntries.Any(e => e.EntryId == id);
        }
    }
}