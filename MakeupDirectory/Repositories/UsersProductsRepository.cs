using Microsoft.Extensions.Configuration;
using MakeupDirectory.Models;
using MakeupDirectory.Utils;
using System.Collections.Generic;

namespace MakeupDirectory.Repositories
{
    public class UsersProductsRepository : BaseRepository, IUsersProductsRepository
    {
        public UsersProductsRepository(IConfiguration configuration) : base(configuration) { }

        public List<UsersProducts> GetAllProductsFromCurrentUser(string firebaseId)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                    SELECT 
                    up.Id As ProductId,
                    up.Name AS ProductName,
                    up.Brand,up.Image_link,
                    up.CreateDateTime, up.ExperationDate,
                    up.PeriodAfterOpening,up.CategoryId,
                    c.Name AS CategoryName,
                    up.NotesId,n.Content,
                    up.UserProfileId, u.Name AS UsersName,u.Email,u.FirebaseUserId
                    FROM UsersProducts up
                    LEFT JOIN Category c ON up.CategoryId = c.Id
                    LEFT JOIN UserProfile u ON up.UserProfileId = u.Id
                    LEFT JOIN Notes n ON up.NotesId = n.Id
                    WHERE u.FirebaseUserId = @firebaseUserId
                    ORDER BY up.ExperationDate DESC";

                    cmd.Parameters.AddWithValue("@firebaseUserId", firebaseId);
                    var reader = cmd.ExecuteReader();

                    var products = new List<UsersProducts>();
                    while (reader.Read())
                    {
                        products.Add(new UsersProducts()
                        {
                            Id = DbUtils.GetInt(reader, "ProductId"),
                            Name = DbUtils.GetString(reader, "ProductName"),
                            Brand = DbUtils.GetString(reader, "Brand"),
                            Image_link = DbUtils.GetString(reader, "Image_link"),
                            CreateDateTime = DbUtils.GetDateTime(reader, "CreateDateTime"),
                            ExperationDate = DbUtils.GetDateTime(reader, "ExperationDate"),
                            PeriodAfterOpening = DbUtils.GetInt(reader, "PeriodAfterOpening"),
                            CategoryId = DbUtils.GetInt(reader, "CategoryId"),
                            Category = new Category()
                            {
                                Id = DbUtils.GetInt(reader, "CategoryId"),
                                Name = DbUtils.GetString(reader, "CategoryName")
                            },
                            NotesId = DbUtils.GetInt(reader, "NotesId"),
                            Notes = new Notes()
                            {
                                Id = DbUtils.GetInt(reader, "NotesId"),
                                Content = DbUtils.GetString(reader, "Content")
                            },
                            UserProfileId = DbUtils.GetInt(reader, "UserProfileId"),
                            UserProfile = new UserProfile()
                            {
                                Id = DbUtils.GetInt(reader, "UserProfileId"),
                                Name = DbUtils.GetString(reader, "UsersName"),
                                Email = DbUtils.GetString(reader, "Email"),
                                FirebaseUserId = DbUtils.GetString(reader, "FirebaseUserId")
                            }
                        });
                    }
                    reader.Close();

                    return products;
                }
            }
        }

        public UsersProducts GetProductById(int Id)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                    SELECT 
                    up.Id As ProductId,
                    up.Name AS ProductName,
                    up.Brand,up.Image_link,
                    up.CreateDateTime, up.ExperationDate,
                    up.PeriodAfterOpening,up.CategoryId,
                    c.Name AS CategoryName,
                    up.NotesId,n.Content,
                    up.UserProfileId, u.Name AS UsersName,u.Email,u.FirebaseUserId
                    FROM UsersProducts up
                    LEFT JOIN Category c ON up.CategoryId = c.Id
                    LEFT JOIN UserProfile u ON up.UserProfileId = u.Id
                    LEFT JOIN Notes n ON up.NotesId = n.Id
                    WHERE up.Id = @Id";
                    DbUtils.AddParameter(cmd, "@Id", Id);
                    var reader = cmd.ExecuteReader();

                    UsersProducts product = null;

                    if (reader.Read())
                    {
                        product = new UsersProducts()
                        {
                            Id = DbUtils.GetInt(reader, "ProductId"),
                            Name = DbUtils.GetString(reader, "ProductName"),
                            Brand = DbUtils.GetString(reader, "Brand"),
                            Image_link = DbUtils.GetString(reader, "Image_link"),
                            CreateDateTime = DbUtils.GetDateTime(reader, "CreateDateTime"),
                            ExperationDate = DbUtils.GetDateTime(reader, "ExperationDate"),
                            PeriodAfterOpening = DbUtils.GetInt(reader, "PeriodAfterOpening"),
                            CategoryId = DbUtils.GetInt(reader, "CategoryId"),
                            Category = new Category()
                            {
                                Id = DbUtils.GetInt(reader, "CategoryId"),
                                Name = DbUtils.GetString(reader, "CategoryName")
                            },
                            NotesId = DbUtils.GetInt(reader, "NotesId"),
                            Notes = new Notes()
                            {
                                Id = DbUtils.GetInt(reader, "NotesId"),
                                Content = DbUtils.GetString(reader, "Content")
                            },
                            UserProfileId = DbUtils.GetInt(reader, "UserProfileId"),
                            UserProfile = new UserProfile()
                            {
                                Id = DbUtils.GetInt(reader, "UserProfileId"),
                                Name = DbUtils.GetString(reader, "UsersName"),
                                Email = DbUtils.GetString(reader, "Email"),
                                FirebaseUserId = DbUtils.GetString(reader, "FirebaseUserId")
                            }
                        };
                    }

                    reader.Close();

                    return product;
                }
            }
        }

        public void AddProduct(UsersProducts product)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                    INSERT INTO UsersProducts 
                    (Name, Brand, Image_link, CreateDateTime, ExperationDate, PeriodAfterOpening, CategoryId, NotesId, UserProfileId)
                    OUTPUT INSERTED.ID
                    VALUES (
                    @Name, @Brand, @Image_link, @CreateDateTime, @ExerationDate, @PeriodAfterOpening, @CategoryId, @NotesId, @UserProfileId)";
                    DbUtils.AddParameter(cmd, "@Name", product.Name);
                    DbUtils.AddParameter(cmd, "@Brand", product.Brand);
                    DbUtils.AddParameter(cmd, "@Image_link", product.Image_link);
                    DbUtils.AddParameter(cmd, "@CreateDateTime", product.CreateDateTime);
                    DbUtils.AddParameter(cmd, "@ExperationDate", product.ExperationDate);
                    DbUtils.AddParameter(cmd, "@PeriodAfterOpening", product.PeriodAfterOpening);
                    DbUtils.AddParameter(cmd, "@CategoryId", product.CategoryId);
                    DbUtils.AddParameter(cmd, "@NotesId", product.NotesId);
                    DbUtils.AddParameter(cmd, "@UserProfileId", product.UserProfileId);

                    product.Id = (int)cmd.ExecuteScalar();
                }
            }
        }


        public void DeleteProduct(int id)
        {
            using (var conn = Connection)
            {
                conn.Open();

                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                    DELETE FROM UsersProducts
                    WHERE Id = @id";

                    cmd.Parameters.AddWithValue("@id", id);

                    cmd.ExecuteNonQuery();
                }

            }

        }

        public void UpdateProduct(UsersProducts product)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                        UPDATE UsersProducts 
                            SET
                                Name = @Name,
                                Brand = @Brand,
                                Image_link = @Image_link,
                                ExperationDate = @ExperationDate,
                                PeriodAfterOpening= @PeriodAfterOpening
                                CategoryId = @CategoryId
                                NotesId = @NotesId
                                WHERE Id = @id";

                    DbUtils.AddParameter(cmd, "@Name", product.Name);
                    DbUtils.AddParameter(cmd, "@Brand", product.Brand);
                    DbUtils.AddParameter(cmd, "@Image_link", product.Image_link);
                    DbUtils.AddParameter(cmd, "@ExperationDate", product.ExperationDate);
                    DbUtils.AddParameter(cmd, "@PeriodAfterOpening", product.PeriodAfterOpening);
                    DbUtils.AddParameter(cmd, "@CategoryId", product.CategoryId);
                    DbUtils.AddParameter(cmd, "@NotesId", product.NotesId);

                    cmd.ExecuteNonQuery();
                }
            }
        }

    }
}
