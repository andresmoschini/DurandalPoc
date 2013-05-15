using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace DurandalPoc.Models
{
    public class User
    {
        public Guid Id { get; set; }
        public UserBasicInfo BasicInfo { get; set; }
        public PhoneList PhoneList { get; set; }

        public User()
        {
            BasicInfo = new UserBasicInfo();
            PhoneList = new PhoneList();
        }
    }
}