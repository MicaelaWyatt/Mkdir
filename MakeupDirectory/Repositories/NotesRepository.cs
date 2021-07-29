using Microsoft.Extensions.Configuration;
using MakeupDirectory.Models;
using MakeupDirectory.Utils;
using System.Collections.Generic;

namespace MakeupDirectory.Repositories
{
    public class NotesRepository : BaseRepository, INotesRepository
    {
        public NotesRepository(IConfiguration configuration) : base(configuration) { }

        public List<Notes> GetAllNotes()
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                    SELECT 
                    Id,Content,ProductId,CreateDateTime
                    FROM Notes";

                    var reader = cmd.ExecuteReader();

                    var notes = new List<Notes>();
                    while (reader.Read())
                    {
                        notes.Add(new Notes()
                        {
                            Id = DbUtils.GetInt(reader, "Id"),
                            Content = DbUtils.GetString(reader, "Content"),
                            ProductId = DbUtils.GetInt(reader, "ProductId"),
                            CreateDateTime = DbUtils.GetDateTime(reader, "CreateDateTime")
                        });
                    }
                    reader.Close();

                    return notes;
                }
            }
        }
        public void AddNote(Notes note)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                    INSERT INTO Notes
                    (Content,ProductId,CreateDateTime)
                    OUTPUT INSERTED.ID
                    VALUES (@Content,@ProductId,@CreateDateTime)";
                    DbUtils.AddParameter(cmd, "@Content", note.Content);
                    DbUtils.AddParameter(cmd, "@ProductId", note.ProductId);
                    DbUtils.AddParameter(cmd, "@CreateDateTime", note.CreateDateTime);
                    note.Id = (int)cmd.ExecuteScalar();
                }
            }
        }

        public void DeleteNote(int id)
        {
            using (var conn = Connection)
            {
                conn.Open();

                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                    DELETE FROM Notes
                    WHERE Id = @id";

                    cmd.Parameters.AddWithValue("@id", id);

                    cmd.ExecuteNonQuery();
                }

            }

        }

        public void UpdateNote(Notes note)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                        UPDATE Notes 
                        SET
                        Content = @Content,
                        ProductId = @ProductId,
                        CreateDateTime = @CreateDateTime
                        WHERE Id = @id";

                    DbUtils.AddParameter(cmd, "@Content", note.Content);
                    DbUtils.AddParameter(cmd, "@ProductId", note.ProductId);
                    DbUtils.AddParameter(cmd, "@CreateDateTime", note.CreateDateTime);
                    DbUtils.AddParameter(cmd, "@id", note.Id);
                    cmd.ExecuteNonQuery();
                }
            }
        }
    }
}
