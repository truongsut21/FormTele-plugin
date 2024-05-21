$(document).ready(function () {
  $("#modalForm").submit(function (event) {
    event.preventDefault(); // Ngăn chặn form submit theo cách thông thường

    // Lấy thông tin từ form
    var formData = {
      name: $("#name_modal").val(),
      email: $("#title_modal").val(),
      category: $("#category_modal").val(),
      description: $("#description_modal").val(),
    };

    $.ajax({
      type: "POST",
      url: "http://localhost:8000/wp-content/plugins/FormTele-plugin/handle_send_message.php",
      data: formData,
      dataType: "json",
      encode: true,
      success: function (data) {
        alert("gui api oke");
      },
    });

    alert("Chúng tôi sẽ liên hệ bạn qua điện thoại sớm nhất !!");
    $("#btn-close-modal").click();
  });
});
