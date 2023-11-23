using System.ComponentModel.DataAnnotations;

namespace backend.ViewModels
{
    public class RegisterViewModel
    {
        [Required]
        public string Username { get; set; }

        [Required]
        [MinLength(9, ErrorMessage = "passwords must have at least 9 characters")]
        [MaxLength(20, ErrorMessage = "passwords must have maximum 20 characters")]
        public string Password { get; set; }
    }
}