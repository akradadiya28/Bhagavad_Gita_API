let chapters = document.getElementById("chapters");
let slokModal = document.querySelector(".modal");

const gitaChapter = () => {
    fetch('https://vedicscriptures.github.io/chapters')
        .then(res => res.json())
        .then((data) => {
            // console.log(data);
            data.forEach((chap) => {
                chapters.innerHTML += `<h3 class="text-[#f57903] text-lg uppercase font-medium text-center my-6">Chapter
                        ${chap.chapter_number}</h3>
                    <div class="w-full flex justify-center">
                        <button data-modal-target="static-modal" data-modal-toggle="static-modal" class="text-white text-center cursor-pointer rounded-md bg-[#1a1a1a] px-2 py-1"
                            onclick="return sloks('${chap.chapter_number}','${chap.verses_count}')">${chap.verses_count} Sloks</button>
                    </div>
                    <h1 class="my-8 text-4xl text-white font-extrabold text-center">${chap.name}</h1>
                    <p class="mt-3 text-left text-white text-lg">${chap.summary.hi}</p>`
            });
        })
        .catch((err) => {
            console.log("error", err);
        })
}
gitaChapter();

const sloks = (num, count) => {
    for (let i = 1; i <= count; i++) {
        fetch(`https://vedicscriptures.github.io/slok/${num}/${i}`)
            .then(res => res.json())
            .then((data) => {
                // console.log(data);
                slokModal.innerHTML += `<h1 class="my-8 text-4xl text-white font-extrabold text-center">${data.verse}</h1>
                            <h3 class="text-[#f57903] text-lg uppercase font-medium text-center my-6">${data.slok}</h3>
                    <p class="mt-3 text-white text-lg text-center">${data.transliteration}</p>`
            })
            .catch((err) => {
                console.log("Error", err);
            })
    }
}