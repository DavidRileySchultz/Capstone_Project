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
        public string Title { get; set; }
        [Display(Name = "Entry")]
        public string Content { get; set; }
        public string UploadedImage { get; set; }
    }
}