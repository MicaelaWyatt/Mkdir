using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using MakeupDirectory.Models;
using MakeupDirectory.Repositories;

namespace MakeupDirectory.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class UsersProductsController : ControllerBase
    {
        private readonly IUsersProductsRepository _usersProductsRepository;

        public UsersProductsController(IUsersProductsRepository usersProductsRepository)
        {
            _usersProductsRepository = usersProductsRepository;
        }

        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            var product = _usersProductsRepository.GetProductById(id);
            if (product == null)
            {
                return NotFound();
            }
            return Ok(product);
        }

        [HttpPost]
        public IActionResult Post(UsersProducts product)
        {
            product.CreateDateTime = DateTime.Now;
            //product.UserProfileId = GetCurrentUserProfile().Id;
            if (string.IsNullOrWhiteSpace(product.Image_link))
            {
                product.Image_link = null;
            }
            _usersProductsRepository.AddProduct(product);
            return CreatedAtAction("Get", new { id = product.Id }, product);
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            _usersProductsRepository.DeleteProduct(id);
            return NoContent();
        }

        [HttpPut("{id}")]
        public IActionResult Put(int id, UsersProducts product)
        {
            if (id != product.Id)
            {
                return BadRequest();
            }

            _usersProductsRepository.UpdateProduct(product);
            return NoContent();
        }


        private UserProfile GetCurrentUserProfile()
        {
            var firebaseUserId = User.FindFirst(ClaimTypes.NameIdentifier).Value;
            return _usersProductsRepository.GetByFirebaseUserId(firebaseUserId);
        }

        private string GetCurrentFirebaseUserProfileId()
        {
            string Id = User.FindFirstValue(ClaimTypes.NameIdentifier);
            return Id;
        }

        //GET: api/userproducts/myproducts
        [HttpGet("MyProducts")]
        public IActionResult GetCurrentUserProducts()
        {
            UserProfile CurrentUser = GetCurrentUserProfile();
            string FirebaseUserId = CurrentUser.FirebaseUserId;
            return Ok(_usersProductsRepository.GetAllProductsFromCurrentUser(FirebaseUserId));
        }

    }
}
