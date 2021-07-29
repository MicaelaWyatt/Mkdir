using MakeupDirectory.Models;
using System.Collections.Generic;

namespace MakeupDirectory.Repositories
{
    public interface INotesRepository
    {
        List<Notes> GetAllNotes();
        void AddNote(Notes note);
        void DeleteNote(int id);
        void UpdateNote(Notes note);
    }
}