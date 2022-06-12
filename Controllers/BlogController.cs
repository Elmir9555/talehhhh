using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BackendLahiye.Context;
using BackendLahiye.Entities;
using BackendLahiye.UniteOfWork;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace BackendLahiye.Controllers
{
    public class BlogController : Controller
    {
        readonly IUow _uow;
        readonly AppDbContext _context;
        public BlogController(IUow uow, AppDbContext context = null)
        {
            _uow = uow;
            _context = context;
        }

        public async Task<IActionResult> BlogPage()
        {
            var list = await _context.Blogs.Where(x => x.Status != DataStatus.Deleted).Include(x => x.BlogDetails).OrderByDescending(x => x.Id).ToListAsync();

            return View(list);
        }

        public async Task<IActionResult> BlogDetailsPage(int id)
        {
            var blog = await _context.Blogs.Where(x => x.Status != DataStatus.Deleted).Include(x => x.Owner).Include(x => x.BlogDetails).FirstOrDefaultAsync(x => x.Id == id);

            return View(blog);
        }
    }
}
