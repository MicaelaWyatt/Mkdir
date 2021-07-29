using MakeupDirectory.Models;
using System.Collections.Generic;

namespace MakeupDirectory.Repositories
{
    public interface INotesRepository
    {
        List<Notes> GetAllNotes();
        List<Notes> GetAllNotesFromProduct(int Id);
        void AddNote(Notes note);
        void DeleteNote(int id);
        void UpdateNote(Notes note);
    }
}