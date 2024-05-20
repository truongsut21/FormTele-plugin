jQuery(document).ready(function ($) {


    function noticeTelegram(raw) {
        const today = new Date()


        // Tùy chỉnh request
        const url =
            "https://api.telegram.org/bot6791202442:AAG-KRwbCj9Ig9CyCJDIxAZi6Vr8TMvtAKI/sendMessage";
        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(raw),
        };

        // Gửi request sử dụng Fetch API
        fetch(url, options)
            .then((response) => response.json())
            .catch((error) => console.error("Error:", error));
    }


    function handleSubmitModal() {
        const name = $("#name_modal").val()
        console.log('name:', name)
        const title = $("#title_modal").val()
        console.log('title:', title)
        const categoty = $("#category_modal").val()
        console.log('categoty:', categoty)
        const description = $("#description_modal").val()
        console.log('description:', description)

        if (name && title && categoty && description) {
            const raw = {
                chat_id: "-4267103711",
                text: `📌Hỗ trợ khách hàng,
          \nTên khách hàng: ${name.toUpperCase()}
          \nTiêu đề: ${title}
          \nDanh mục: ${categoty}   
          \nMô tả: ${description}`

            };
            noticeTelegram(raw)
        } else {
            alert("vui lòng điền đầy đủ thông tin")
        }
    }
    $("#btn_submit_modal").click(handleSubmitModal)

});
