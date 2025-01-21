// หมวดหมู่ที่สามารถเลือกได้
const categories = [
  { name: "Theater", icon: "fas fa-theater-masks" },
  { name: "Charity", icon: "fas fa-gift" },
  { name: "Concert", icon: "fas fa-music" },
  { name: "Market", icon: "fas fa-shopping-basket" },
  { name: "Sports", icon: "fas fa-futbol" },
  { name: "Study", icon: "fas fa-book"}
];

// ข้อมูลกิจกรรม
const events = [
  { name: "Theater Play", category: "Theater", image: "image1.jpg", time: "19:00", date: "12 december 2024", location: "Theater", details: "Located at the main city theater, near the central park.", ticketPrice: "120 Baht" },
  { name: "Sports Competition", category: "Sports", image: "image4.jpg", time: "10:00", date: "2024-12-30", location: "Sports Arena", details: "At the Sports Arena, opposite the city mall.", ticketPrice: "Free" },
  { name: "YaYai", category: "Concert", image: "image1.jpg", time: "19:00", date: "2024-12-29", location: "Theater", details: "Located at the main city theater, near the central park.", ticketPrice: "120 Baht" },
  { name: "KUY", category: "Market", image: "image1.jpg", time: "19:00", date: "2024-12-29", location: "Theater", details: "Located at the main city theater, near the central park.", ticketPrice: "120 Baht" },
  { name: "Theater Play", category: "Charity", image: "image1.jpg", time: "19:00", date: "2024-12-29", location: "Theater", details: "Located at the main city theater, near the central park.", ticketPrice: "120 Baht" }
];

// ฟังก์ชันสำหรับการเลื่อนหมวดหมู่
function scrollFaculties(direction) {
  const container = document.getElementById("categoriesContainer");
  const scrollAmount = container.offsetWidth / 3;  // เลื่อนแต่ละครั้งที่ 1/3 ของความกว้าง

  container.scrollBy({
    left: direction * scrollAmount,  // ขยับไปทางซ้ายหรือขวาตาม direction
    behavior: "smooth",  // การเลื่อนจะเป็นไปอย่างนุ่มนวล
  });
}

// ฟังก์ชันสร้างหมวดหมู่
function createCategoriesBlocks() {
  const container = document.getElementById("categoriesContainer");
  categories.forEach(category => {
    const block = document.createElement("div");
    block.classList.add("categories-block");
    block.setAttribute("onclick", "selectCategory(this)");

    block.innerHTML = `
      <i class="${category.icon}"></i>
      <p>${category.name}</p>
    `;

    container.appendChild(block);
  });
}

// ฟังก์ชันสำหรับการเลื่อนกิจกรรม
function scrollEvents(direction) {
  const container = document.querySelector(".event-card-container");
  const scrollAmount = container.offsetWidth / 3;

  container.scrollBy({
    left: direction * scrollAmount,
    behavior: "smooth",
  });
}

// ฟังก์ชันกรองกิจกรรมตามหมวดหมู่ที่เลือก
function filterEventsByCategory(selectedCategory) {
  const eventContainer = document.querySelector(".event-card-container");
  eventContainer.innerHTML = ""; // ลบการ์ดกิจกรรมเก่าออก

  let filteredEvents;

  // กรองกิจกรรมตามหมวดหมู่
  if (selectedCategory === "Random") {
    filteredEvents = getRandomEvents(); // แสดงกิจกรรมสุ่ม 2 รายการ
  } else {
    filteredEvents = events.filter(event => event.category === selectedCategory); // กรองกิจกรรมตามหมวดหมู่ที่เลือก
  }

  // แสดงกิจกรรมที่กรองออกมา
  filteredEvents.forEach(event => {
    const eventCard = document.createElement("div");
    eventCard.classList.add("event-card");
    eventCard.innerHTML = `
        <div class="event-card-image" style="background-image: url('${event.image}');"></div>
        <div class="event-card-content">
          <h3>${event.name}</h3>
          <p><i class="fas fa-clock"></i> ${event.time}</p>
          <p><i class="fas fa-calendar-alt"></i> ${event.date}</p>
          <p><i class="fas fa-map-marker-alt"></i> ${event.location}</p>
          <p class="event-location-details">${event.details}</p>
          <div class="event-card-footer">
            <span><i class="fas fa-ticket-alt"></i> ${event.ticketPrice}</span>
            <button class="event-detail-btn">Detail</button>
            <div class="event-star-button" onclick="toggleStar(this)">
              <i class="fas fa-star"></i>
            </div>
          </div>
        </div>
      `;
    eventContainer.appendChild(eventCard);
  });

  // ถ้ามีกิจกรรมมากกว่า 2 รายการ, ให้แสดงปุ่มเลื่อน
  if (filteredEvents.length > 2) {
    document.querySelector(".scroll-btn.left").style.display = "block";
    document.querySelector(".scroll-btn.right").style.display = "block";
  } else {
    // ซ่อนปุ่มเลื่อนหากจำนวนกิจกรรมไม่ถึง 2
    document.querySelector(".scroll-btn.left").style.display = "none";
    document.querySelector(".scroll-btn.right").style.display = "none";
  }
}

// ฟังก์ชันสำหรับการสุ่มกิจกรรม 2 รายการ
function getRandomEvents() {
  const randomEvents = [];
  // สุ่มเลือกกิจกรรม 2 รายการ
  const shuffledEvents = events.sort(() => 0.5 - Math.random());
  for (let i = 0; i < 2; i++) {  // แสดงแค่ 2 กิจกรรมสุ่ม
    randomEvents.push(shuffledEvents[i]);
  }
  return randomEvents;
}

// ฟังก์ชันเลือกหมวดหมู่
function selectCategory(selectedBlock) {
  const blocks = document.querySelectorAll(".categories-block");
  blocks.forEach(block => block.classList.remove("selected"));
  selectedBlock.classList.add("selected");

  const selectedCategory = selectedBlock.querySelector("p").textContent;
  filterEventsByCategory(selectedCategory); // กรองกิจกรรมตามหมวดหมู่ที่เลือก
}

// ฟังก์ชันสำหรับการกดดาว
function toggleStar(starElement) {
  const icon = starElement.querySelector("i");
  icon.classList.toggle("fas"); // เปลี่ยนจากดาวขาวเป็นดาวทอง
  icon.classList.toggle("far"); // เปลี่ยนจากดาวทองเป็นดาวขาว
}

// เรียกฟังก์ชันเมื่อหน้าโหลดเสร็จ
window.onload = function () {
  createCategoriesBlocks();
  filterEventsByCategory("Random"); // เริ่มต้นแสดงกิจกรรมสุ่ม 2 รายการ
};
