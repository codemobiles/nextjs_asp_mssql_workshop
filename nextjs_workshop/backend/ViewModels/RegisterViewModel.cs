using System.ComponentModel.DataAnnotations;

namespace backend.ViewModels
{
    public class RegisterViewModel
    {
        [Required]
        public string Username { get; set; }

        [Required]
        [MinLength(4, ErrorMessage = "passwords must have at least 4 characters")]
        public string Password { get; set; }
    }
}