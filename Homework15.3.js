const list = document.querySelector(".list");
document.addEventListener("keydown", logMessage);
function logMessage({key}) {
    const markup = `<div class="log-item">
      <ul>
        <li><b>Key</b>: ${key}</li>
      </ul>
    </div>`;
    list.insertAdjacentHTML("beforebegin", markup)};