using Microsoft.Extensions.Configuration;
using MakeupDirectory.Models;
using MakeupDirectory.Utils;

namespace MakeupDirectory.Repositories
{
    public class NotesRepository : BaseRepository
    {
        public NotesRepository(IConfiguration configuration): base(configuration) { }

        //public Notes AddNote ()
        //{

        //}
    }
}
