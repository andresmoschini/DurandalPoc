using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace DurandalPoc.Models
{
    public class UserListItem
    {
        public Guid Id { get; set; }
        public string Username { get; set; }
        public string FullName { get; set; }
    }
}