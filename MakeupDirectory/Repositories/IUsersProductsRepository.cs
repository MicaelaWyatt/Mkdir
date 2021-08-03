using MakeupDirectory.Models;
using System;
using System.Collections.Generic;

namespace MakeupDirectory.Repositories
{
    public interface IUsersProductsRepository
    {
        void AddProduct(UsersProducts product);
        void DeleteProduct(int id);
        List<UsersProducts> GetAllProductsFromCurrentUser(string firebaseUserId);
        List<UsersProducts> GetAllProductsByCategory(string firebaseUserId, int id);
        UserProfile GetByFirebaseUserId(string firebaseUserId);
        UsersProducts GetProductById(int Id);
        UsersProducts GetProductWithId(int id);
        void UpdateProduct(UsersProducts product);
        //public DateTime AddMonths(int months);
    }
}