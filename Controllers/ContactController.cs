using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BackendLahiye.Entities;
using BackendLahiye.UniteOfWork;
using Microsoft.AspNetCore.Mvc;

namespace BackendLahiye.Controllers
{
    public class ContactController : Controller
    {
        readonly IUow _uow;
        
        public ContactController(IUow uow)
        {
            _uow = uow;
            
        }

        public async Task<IActionResult> ContactPage()
        {
            var contact = await _uow.GetRepository<Contact>().GetAllOrderByAsync(x => x.Id, false);

            return View(contact);
        }
    }
}
