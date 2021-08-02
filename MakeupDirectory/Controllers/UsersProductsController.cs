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
        private readonly IUserProfileRepository _userProfileRepository;
        public UsersProductsController(IUsersProductsRepository usersProductsRepository, IUserProfileRepository userProfileRepository)
        {
            _usersProductsRepository = usersProductsRepository;
            _userProfileRepository = userProfileRepository;
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

        [HttpGet("Getproduct/{id}")]
        public IActionResult Getproduct(int id)
        {
            var product = _usersProductsRepository.GetProductWithId(id);
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
            product.ExperationDate = DateTime.Now;
            
                //dat.AddMonths(ctr).ToString("d")
            product.UserProfileId = GetCurrentUserProfile().Id;
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
        public IActionResult GetAllProductsFromCurrentUser()
        {
            string CurrentUserProfileId = GetCurrentFirebaseUserProfileId();
            var products = _usersProductsRepository.GetAllProductsFromCurrentUser(CurrentUserProfileId);
            if(products == null)
            {
                return NotFound();
            }
            return Ok(products);
        }

        [HttpGet("MyProductsByCategory")]
        public IActionResult GetAllProductsFromUserAndCategory(int id)
        {
            string CurrentUserProfileId = GetCurrentFirebaseUserProfileId();
            var products = _usersProductsRepository.GetAllProductsByCategory(CurrentUserProfileId,id);
            if (products == null)
            {
                return NotFound();
            }
            return Ok(products);
        }

    }
}
