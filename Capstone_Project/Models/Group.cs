using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Capstone_Project.Models
{
    public class Group
    {
        [Key]
        public int GroupId { get; set; }
        public string Name { get; set; }

    }
}
