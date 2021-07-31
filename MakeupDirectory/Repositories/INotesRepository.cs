using MakeupDirectory.Models;
using System.Collections.Generic;

namespace MakeupDirectory.Repositories
{
    public interface INotesRepository
    {
        void AddNote(Notes note);
        void DeleteNote(int id);
        List<Notes> GetAllNotes();
        List<Notes> GetAllNotesFromProduct(int Id);
        Notes GetById(int id);
        void UpdateNote(Notes note);
    }
}