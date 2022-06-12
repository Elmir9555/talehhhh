using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BackendLahiye.Context;
using Microsoft.AspNetCore.Mvc;

namespace BackendLahiye.ViewComponents
{
    public class CategoryList : ViewComponent
    {
        readonly AppDbContext _context;

        public CategoryList(AppDbContext context)
        {
            _context = context;
        }

        public IViewComponentResult Invoke()
        {
            var list = _context.Categories.Where(x => x.Status != Entities.DataStatus.Deleted).ToList();

            return View(list);
        }
    }
}
