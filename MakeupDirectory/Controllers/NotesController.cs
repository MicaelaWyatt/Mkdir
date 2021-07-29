using MakeupDirectory.Models;
using MakeupDirectory.Repositories;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MakeupDirectory.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class NotesController : ControllerBase
    {
        private readonly INotesRepository _notesRepository;

        public NotesController(INotesRepository notesRepository)
        {
            _notesRepository = notesRepository;
        }

        [HttpGet]
        public IActionResult Get()
        {
            var notes = _notesRepository.GetAllNotes();
            if (notes == null)
            {
                return NotFound();
            }
            return Ok(notes);
        }

        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            var notes = _notesRepository.GetAllNotesFromProduct(id);
            if (notes == null)
            {
                return NotFound();
            }
            return Ok(notes);
        }

        [HttpPost]
        public IActionResult Post(Notes note)
        {
            _notesRepository.AddNote(note);
            return CreatedAtAction("Get", new { id = note.Id }, note);
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            _notesRepository.DeleteNote(id);
            return NoContent();
        }

        [HttpPut("{id}")]
        public IActionResult Put(int id, Notes note)
        {
            if (id != note.Id)
            {
                return BadRequest();
            }

            _notesRepository.UpdateNote(note);
            return NoContent();
        }
    }
}
