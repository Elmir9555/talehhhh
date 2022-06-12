﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;

namespace BackendLahiye.Validation.ModelMetaDataTypeValidation
{
    public class SaleOffValidation
    {
        [Required(ErrorMessage ="Name hissesini bos kecmeyin.")]
        public string Name { get; set; }
        [Required(ErrorMessage = "OldPrice hissesini bos kecmeyin.")]
        public decimal OldPrice { get; set; }
        [Required(ErrorMessage = "NewPrice hissesini bos kecmeyin.")]
        public decimal NewPrice { get; set; }
        [Required(ErrorMessage = "Photo'nu bos kecmeyin.")]
        public IFormFile Photo { get; set; }
    }
}
