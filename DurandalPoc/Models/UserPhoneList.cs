using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace DurandalPoc.Models
{
    public class PhoneList
    {
        public int? DefaultPhoneIndex { get; set; }
        public List<PhoneListItem> List { get; set; }

        public PhoneList()
        {
            List = new List<PhoneListItem>();
        }
    }

    public class PhoneListItem
    {
        public bool SmsReady { get; set; }
        public string PhoneNumber { get; set; }
        public string Extension { get; set; }
    }
}