const aCourse = {
    code: "CSE121b",
    name: "Javascript Language",
    sections: [
        {sectionNum: 1, roomNum: "STC 353", enrolled: 26, days: "TTh", instructor: "Bro T"},
        {sectionNum: 2, roomNum: "STC 347", enrolled: 28, days: "TTh", instructor: "Sis A"}
    ],
    changeEnrollment: function (sectionNum,action) {
        var sectionIndex = this.sections.findIndex((section) => section.sectionNum == sectionNum);
        if (sectionIndex >= 0) {
            if (action == "enroll") {
                this.sections[sectionIndex].enrolled++;
            } else if (action == "drop") {
                this.sections[sectionIndex].enrolled--;
            }
            renderSections(this.sections);
        }
    }
};

function setCourseInfo(course) {
    const courseName = document.getElementById("courseName");
    const courseCode = document.getElementById("courseCode");
    courseName.textContent = course.name;
    courseCode.textContent = course.code;
}

function renderSections(sections) {
    const html = sections.map(
        (section) => `<tr>
        <td>${section.sectionNum}</td>
        <td>${section.roomNum}</td>
        <td>${section.enrolled}</td>
        <td>${section.days}</td>
        <td>${section.instructor}</td></tr>`
    );
    document.getElementById("sections").innerHTML = html.join("");
}

document.getElementById("enrollStudent").addEventListener('click', function () {
    var sectionNum = document.getElementById("sectionNumber").value;
    aCourse.stopDropAndEnrollStudent(sectionNum,"enroll");
});

document.getElementById("dropStudent").addEventListener('click', function () {
    var sectionNum = document.getElementById("sectionNumber").value;
    aCourse.stopDropAndEnrollStudent(sectionNum,"drop");
});

setCourseInfo(aCourse);
renderSections(aCourse.sections);