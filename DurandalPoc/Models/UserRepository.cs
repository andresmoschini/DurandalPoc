using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace DurandalPoc.Models
{
    public class UserRepository
    {
        private static readonly List<User> DemoData = new List<User>()
        {
            new User() 
            { 
                Id = new Guid("e3561cff-5dd2-40e3-8314-0c8fdae530f2"),
                BasicInfo = new UserBasicInfo() 
                {
                    Username = "andresmoschini",
                    Email = "amoschini+demo@makingsense.com",
                    FullName = "Andrés Moschini",
                    BirthDate = new DateTime(1978, 12, 2)
                },
                PhoneList = new PhoneList() 
                {
                    new PhoneListItem() 
                    {
                        PhoneNumber = "3456789012"
                    }
                }
            },
            new User() 
            { 
                Id = new Guid("7b474abd-5b85-4bdb-ba0d-eb00da395106"),
                BasicInfo = new UserBasicInfo() 
                {
                    Username = "jperez",
                    Email = "demo@demo.com",
                    FullName = "Juan Perez",
                    BirthDate = new DateTime(1980, 1, 1)
                },
                PhoneList = new PhoneList() 
                {
                    new PhoneListItem() 
                    {
                        PhoneNumber = "2345678901",
                        Extension = "123"
                    }
                }
            },
            new User() 
            { 
                Id = new Guid("68f262f3-6eed-4b53-a446-bfbcfda83705"),
                BasicInfo = new UserBasicInfo() 
                {
                    Username = "admin",
                    Email = "admin@demo.com",
                    FullName = "John Smith",
                    BirthDate = new DateTime(1980, 1, 1)
                },
                PhoneList = new PhoneList() 
                {
                    new PhoneListItem() 
                    {
                        PhoneNumber = "1234567890",
                        SmsReady = true
                    }
                }
            },
        };

        public IQueryable<UserListItem> List()
        {
            return DemoData.AsQueryable().Select(x => new UserListItem()
            {
                Id = x.Id,
                Username = x.BasicInfo.Username,
                FullName = x.BasicInfo.FullName
            });
        }

        public User Get(Guid id)
        {
            return DemoData.Where(x => x.Id == id).FirstOrDefault();
        }

        public void Save(User user)
        {
            if (user.Id == Guid.Empty)
                user.Id = Guid.NewGuid();

            Delete(user.Id);

            DemoData.Add(user);
        }

        public void Delete(Guid id)
        {
            var existing = Get(id);
            if (existing != null)
                DemoData.Remove(existing);
        }
    }
}