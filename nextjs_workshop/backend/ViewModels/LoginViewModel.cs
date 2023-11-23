using System.ComponentModel.DataAnnotations;

namespace backend.ViewModels
{
    public class LoginViewModel
    {
        [Required]
        public string Username { get; set; }

        [Required]
        [MinLength(8, ErrorMessage = "passwords must have at least 8 characters")]
        public string Password { get; set; }
    }
}