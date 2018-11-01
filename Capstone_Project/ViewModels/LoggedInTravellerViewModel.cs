﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Capstone_Project.ViewModels
{
    public class LoggedInTravellerViewModel
    {
        public int Id { get; set; }
        public string first_name { get; set; }
        public string last_name { get; set; }
        public bool isValid { get; set; }
        public bool isPasswordCorrect { get; set; }
    }

    public class LogInAttempt
    {
        public string email { get; set; }
        public string password { get; set; }
    }
}