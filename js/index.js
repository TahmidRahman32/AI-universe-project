const dataLoader = () => {
   fetch("https://openapi.programming-hero.com/api/ai/tools")
      .then((res) => res.json())
      .then((data) => display(data.data.tools));
};

const display = (tools) => {
   const container = document.getElementById("container");
   tools.forEach((tool) => {
      console.log(tool);

      const div = document.createElement("div");
      div.innerHTML = `
      <div  class="card w-96 bg-base-100 shadow-xl border px-3 py-4">
   <figure><img src="${tool ? tool.image : "sorry image not found"}"  alt="Shoes" /></figure>
   <h3 class="text-xl font-semibold my-3">Features</h3>
      <li>Natural language processing</li>
      <li>Contextual understanding</li>
      <li>Text generation</li>
      <p class="border my-3"></p>
      <h3 class="text-xl font-semibold">${tool ? tool.name : 'not found'}</h3>
</div>
      `;
      container.appendChild(div);
   });
};

dataLoader();
