using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Capstone_Project.Models
{
    public class JournalEntry
    {
        [Key]
        public int EntryId { get; set; }
        [Display(Name = "Enter your name:")]
        public string Name { get; set; }
        public string Title { get; set; }
        [Display(Name = "Entry")]
        public string Content { get; set; }
        [Display(Name = "Date Published")]
        public DateTime PubDate { get; set; }
    }
}