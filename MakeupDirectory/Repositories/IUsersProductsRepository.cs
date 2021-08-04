using MakeupDirectory.Models;
using System.Collections.Generic;

namespace MakeupDirectory.Repositories
{
    public interface IUsersProductsRepository
    {
        void AddProduct(UsersProducts product);
        void DeleteProduct(int id);
        List<UsersProducts> GetAllProductsFromCurrentUser(string firebaseUserId);
        UserProfile GetByFirebaseUserId(string firebaseUserId);
        UsersProducts GetProductById(int Id);
        UsersProducts GetProductWithId(int id);
        void UpdateProduct(UsersProducts product);
    }
}