using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Capstone_Project.ViewModels
{
    public class TravellerGroupViewModel
    {
        public string groupName { get; set; }

        public int[] members { get; set; }

        public int travellerId { get; set; }

        public string[] travellerNames { get; set; }

        public int groupId { get; set; }

    }
}