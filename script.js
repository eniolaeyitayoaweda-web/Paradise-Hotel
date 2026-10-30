document.addEventListener("DOMContentLoaded", () => {
    
    const loginForm = document.querySelector(".booking form");
    if (loginForm) {
        loginForm.addEventListener("submit", (event) => {
            event.preventDefault();
            const emailInput = document.getElementById("email").value;
            let guestName = emailInput.split("@")[0];
            guestName = guestName.charAt(0).toUpperCase() + guestName.slice(1);
            
            alert(`Welcome back, Guest ${guestName}! Proceeding to booking details.`);
            loginForm.submit();
        });
    }

    const roomForm = document.querySelector('form[action="confirmation.html"]');
    if (roomForm) {
        roomForm.addEventListener("submit", (event) => {
            event.preventDefault();
            const selectedRadio = document.querySelector('input[name="room_category"]:checked');

            if (selectedRadio) {
                const roomType = selectedRadio.value;
                let roomName = "";

                if (roomType === "standard") roomName = "Standard Room";
                if (roomType === "executive") roomName = "Executive Suite";
                if (roomType === "luxury") roomName = "Presidential Luxury Villa";

                alert(`You have selected the ${roomName}.Click Proceed to confirmation.`);
                window.location.href= "confirmation.html";
                roomForm.submit();
            }
        });
    }
});
