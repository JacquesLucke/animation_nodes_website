"use strict";

const downloadData = {
    "Linux" : [
        {
            title : "v2.1 Blender 2.8x",
            isTestBuild : true,
            link : "https://github.com/JacquesLucke/animation_nodes/releases/download/daily/animation_nodes_v2_1_linux_py37.zip"
        },
        {
            title : "v2.1 Blender 2.7x",
            isTestBuild : true,
            link : "https://github.com/JacquesLucke/animation_nodes/releases/download/v2.1_testbuilds_2/animation_nodes_v2_1_linux_py36.zip"
        },
        {
            title : "v2.0 Blender 2.7x",
            isTestBuild : false,
            link : "https://github.com/JacquesLucke/animation_nodes/releases/download/v2.0/animation_nodes_v2_0_linux.zip"
        },
    ],
    "Windows" : [
        {
            title : "v2.1 Blender 2.8x",
            isTestBuild : true,
            link : "https://github.com/JacquesLucke/animation_nodes/releases/download/daily/animation_nodes_v2_1_windows_py37.zip"
        },
        {
            title : "v2.1 Blender 2.7x",
            isTestBuild : true,
            link : "https://github.com/JacquesLucke/animation_nodes/releases/download/v2.1_testbuilds_2/animation_nodes_v2_1_windows_py36.zip"
        },
        {
            title : "v2.0 Blender 2.7x0",
            isTestBuild : false,
            link : "https://github.com/JacquesLucke/animation_nodes/releases/download/v2.0/animation_nodes_v2_0_windows.zip"
        },
    ],
    "MacOS" : [
        {
            title : "v2.1 Blender 2.8x",
            isTestBuild : true,
            link : "https://github.com/JacquesLucke/animation_nodes/releases/download/daily/animation_nodes_v2_1_macOS_py37.zip"
        },
        {
            title : "v2.1 Blender 2.7x",
            isTestBuild : true,
            link : "https://github.com/JacquesLucke/animation_nodes/releases/download/v2.1_testbuilds_2/animation_nodes_v2_1_macOS_py36.zip"
        },
        {
            title : "v2.0 Blender 2.7x",
            isTestBuild : false,
            link : "https://github.com/JacquesLucke/animation_nodes/releases/download/v2.0/animation_nodes_v2_0_macos.zip"
        },
    ],
};

function getPlatform() {
    let platform = "Unknown";
    if (navigator.userAgent.includes("Linux")) {
        platform = "Linux";
    } else if (navigator.userAgent.includes("Win")) {
        platform = "Windows";
    } else if (navigator.userAgent.includes("Mac")) {
        platform = "MacOS";
    }
    return platform;
}

function getDownloadField(title, isTestBuild, link) {
    return `
        <h6>${title}${isTestBuild ? "<sup>*</sup>" : ""}</h6>
        <a href="${link}" class="link-button" download>Download</a>
    `;
}

function appendDownloadField(section, fieldData, platform = "") {
    let field = document.createElement("div");
    field.className = "download-field";
    field.innerHTML = getDownloadField(
        platform + " " + fieldData.title, fieldData.isTestBuild, fieldData.link);
    section.appendChild(field);
}

function addDownloadData() {
    let platform = getPlatform();
    let downloadSection = document.getElementById("download");
    if (platform === "Unknown") {
        for (const key in downloadData) {
            downloadData[key].forEach(fieldData => {
                appendDownloadField(downloadSection, fieldData, key);
            })
        }
    } else {
        let platformText = document.createElement("p");
        platformText.innerHTML = `Animation Nodes builds for ${platform}:`;
        downloadSection.appendChild(platformText);

        downloadData[platform].forEach(fieldData => {
            appendDownloadField(downloadSection, fieldData);
        })
    }

    let footerText = document.createElement("p");
    footerText.innerHTML = `Read <a href="https://animation-nodes-manual.readthedocs.io/en/latest/user_guide/install/install.html">the installation guide</a>. Other builds can be downloaded from <a href="https://github.com/JacquesLucke/animation_nodes/releases">the releases page</a> or the <a href="https://aur.archlinux.org/packages/?K=animation-nodes">AUR</a>. Versions denoted by <sup>*</sup> are test build that are under development.`;
    downloadSection.appendChild(footerText);
}

addDownloadData();



