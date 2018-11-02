using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Capstone_Project.ViewModels
{
    public class ShowGroupViewModel
    {
        public string Name { get; set; }
        public int Id { get; set; }
    }   

    public class ShowGroupViewModels
    {
        public List<ShowGroupViewModel> groupsIn { get; set; }
        public List<ShowGroupViewModel> groupsOwn { get; set; }
    }
}

