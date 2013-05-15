using DurandalPoc.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace DurandalPoc.Controllers
{
    public class UsersController : ApiController
    {
        UserRepository UserRepository = new UserRepository();

        // GET api/users
        public IEnumerable<UserListItem> Get()
        {
            return UserRepository.List();

        }

        // GET api/users/5
        public User Get(Guid id)
        {
            var user = UserRepository.Get(id);
            if (user == null)
            {
                throw new HttpResponseException(new HttpResponseMessage(HttpStatusCode.NotFound)
                    {
                        Content = new StringContent(string.Format("No user with Id = {0}", id)),
                        ReasonPhrase = "User Id Not Found"
                    });
            }
            return user;
        }

        //TODO: create actions to update/create only phones or basic info
        // POST api/users
        public void Post([FromBody]User user)
        {
            UserRepository.Save(user);
        }

        // DELETE api/users/5
        public void Delete(Guid id)
        {
            UserRepository.Delete(id);
        }
    }
}
