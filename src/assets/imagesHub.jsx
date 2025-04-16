import React from 'react';

const IMG = {
    //logos Volta:
    voltaEsLogo_White: new URL('./images/logos/Volta/med/Volta-Logo+Text_white-md.png', import.meta.url).href,
    voltaLogo_White: new URL('./images/logos/Volta/med/Volta-Logo_white-md.png', import.meta.url).href,
    voltaEsLogo_Black: new URL('./images/logos/Volta/med/Volta-Logo+Text_black-md.png', import.meta.url).href,
    voltaLogo_Black: new URL('./images/logos/Volta/med/Volta-Logo_black-md.png', import.meta.url).href,
    voltaEsLogo_Blue: new URL('./images/logos/Volta/med/Volta-Logo+Text_blue-md.png', import.meta.url).href,
    voltaLogo_Blue: new URL('./images/logos/Volta/med/Volta-Logo_blue-md.png', import.meta.url).href,

    //logos parceiros:
    froniusLogo: new URL('./images/logos/Parceiros/LOGO-fronius.png', import.meta.url).href,
    jaSolarLogo: new URL('./images/logos/Parceiros/LOGO-JASolar.png', import.meta.url).href,
    jinkoLogo: new URL('./images/logos/Parceiros/LOGO-Jinko.png', import.meta.url).href,
    longiLogo: new URL('./images/logos/Parceiros/LOGO-longi.png', import.meta.url).href,
    smaLogo: new URL('./images/logos/Parceiros/LOGO-sma.png', import.meta.url).href,
    trinaLogo: new URL('./images/logos/Parceiros/LOGO-trina.png', import.meta.url).href,

    //incons
    mailIcon: new URL('./images/icons/mail-white.png', import.meta.url).href,
    menuIconWhite: new URL('./images/icons/menu-white.png', import.meta.url).href,
    menuIconOrange: new URL('./images/icons/menu-orange.png', import.meta.url).href,
    zapIcon: new URL('./images/icons/whatsapp-white.png', import.meta.url).href,
    phasesIcon_White: new URL('./images/icons/info-cards/timeline-white.png', import.meta.url).href,
    phasesIcon_Color: new URL('./images/icons/info-cards/timeline-color.png', import.meta.url).href,
    panelIcon_White: new URL('./images/icons/info-cards/panel-white.png', import.meta.url).href,
    panelIcon_Color: new URL('./images/icons/info-cards/panel-color.png', import.meta.url).href,
    projectsIcon_White: new URL('./images/icons/info-cards/house-white.png', import.meta.url).href,
    projectsIcon_Color: new URL('./images/icons/info-cards/house-color.png', import.meta.url).href,
    arrowLeftIcon: new URL('./images/icons/arrows/option-01_left.png', import.meta.url).href,
    arrowRightIcon: new URL('./images/icons/arrows/option-01_right.png', import.meta.url).href,
    arrowDownIcon: new URL('./images/icons/arrows/option-01_down.png', import.meta.url).href,

    //backgrounds and info images
    projectPhasesDiagram: new URL('./images/infos/diagrama_Etapas-do-Projeto.png', import.meta.url).href,
    jumbotronBackground: new URL('./images/backgrounds/JUMBO-background.JPG', import.meta.url).href,
    aboutBackground: new URL('./images/backgrounds/ABOUT-background.JPG', import.meta.url).href,
    aboutBox: new URL('./images/backgrounds/ABOUT-box.JPG', import.meta.url).href,
    infosBackground: new URL('./images/backgrounds/INFO-background.JPG', import.meta.url).href,
    cartoonFullBackground: new URL('./images/backgrounds/cartoon/CARDS-background-full.jpeg', import.meta.url).href,
    cartoonLeftBackground: new URL('./images/backgrounds/cartoon/CARDS-background-house.jpeg', import.meta.url).href,
    cartoonRightBackground: new URL('./images/backgrounds/cartoon/CARDS-background-panels.jpeg', import.meta.url).href,
    vaBackground: new URL('./images/backgrounds/cartoon/VA-background.jpeg', import.meta.url).href,

    /*---------------------------projects---------------------------*/
    //Fazenda Camarão
    FCAM_00: new URL('./images/projects/Fazenda de Camarão/FCAM_00.JPG', import.meta.url).href,
    FCAM_01: new URL('./images/projects/Fazenda de Camarão/FCAM_01.jpg', import.meta.url).href,
    FCAM_02: new URL('./images/projects/Fazenda de Camarão/FCAM_02.jpg', import.meta.url).href,
    FCAM_03: new URL('./images/projects/Fazenda de Camarão/FCAM_04.jpg', import.meta.url).href,

    //Indústria Camaragibe
    IND_CA_01: new URL('./images/projects/Industria Camaragibe/IND-CA_01.jpg', import.meta.url).href,
    IND_CA_02: new URL('./images/projects/Industria Camaragibe/IND-CA_02.jpg', import.meta.url).href,
    IND_CA_03: new URL('./images/projects/Industria Camaragibe/IND-CA_03.jpg', import.meta.url).href,
    IND_CA_04: new URL('./images/projects/Industria Camaragibe/IND-CA_04.png', import.meta.url).href,
    IND_CA_05: new URL('./images/projects/Industria Camaragibe/IND-CA_05.jpg', import.meta.url).href,
    IND_CA_06: new URL('./images/projects/Industria Camaragibe/IND-CA_06.jpg', import.meta.url).href,
    IND_CA_07: new URL('./images/projects/Industria Camaragibe/IND-CA_07.jpg', import.meta.url).href,

    //Maria Farinha
    MA_FA_00: new URL('./images/projects/Maria Farinha/MAR-FA_00.JPG', import.meta.url).href,
    MA_FA_01: new URL('./images/projects/Maria Farinha/MAR-FA_01.JPG', import.meta.url).href,
    MA_FA_02: new URL('./images/projects/Maria Farinha/MAR-FA_02.JPG', import.meta.url).href,
    MA_FA_03: new URL('./images/projects/Maria Farinha/MAR-FA_03.JPG', import.meta.url).href,
    MA_FA_04: new URL('./images/projects/Maria Farinha/MAR-FA_04.JPG', import.meta.url).href,

    //Projetos em Aldeia
    ALD_00: new URL('./images/projects/Projetos em Aldeia/ALD_00.JPG', import.meta.url).href,
    ALD_01: new URL('./images/projects/Projetos em Aldeia/ALD_01.JPG', import.meta.url).href,
    ALD_02: new URL('./images/projects/Projetos em Aldeia/ALD_02.0.jpg', import.meta.url).href,
    ALD_03: new URL('./images/projects/Projetos em Aldeia/ALD_02.1.jpg', import.meta.url).href,
    ALD_04: new URL('./images/projects/Projetos em Aldeia/ALD_03.JPG', import.meta.url).href,
    ALD_05: new URL('./images/projects/Projetos em Aldeia/ALD_04.JPG', import.meta.url).href,
    ALD_06: new URL('./images/projects/Projetos em Aldeia/ALD_05.JPG', import.meta.url).href,
    ALD_07: new URL('./images/projects/Projetos em Aldeia/ALD_06.JPG', import.meta.url).href,
    ALD_08: new URL('./images/projects/Projetos em Aldeia/ALD_07.jpg', import.meta.url).href,
    ALD_09: new URL('./images/projects/Projetos em Aldeia/ALD_08.jpg', import.meta.url).href,
    ALD_10: new URL('./images/projects/Projetos em Aldeia/ALD_09.jpg', import.meta.url).href,
    ALD_11: new URL('./images/projects/Projetos em Aldeia/ALD_10.jpeg', import.meta.url).href,
    ALD_12: new URL('./images/projects/Projetos em Aldeia/ALD_11.JPG', import.meta.url).href,
    ALD_13: new URL('./images/projects/Projetos em Aldeia/ALD_12.jpg', import.meta.url).href,
    ALD_14: new URL('./images/projects/Projetos em Aldeia/ALD_13.JPG', import.meta.url).href,
    ALD_15: new URL('./images/projects/Projetos em Aldeia/ALD_14.JPG', import.meta.url).href,
    ALD_16: new URL('./images/projects/Projetos em Aldeia/ALD_15.jpg', import.meta.url).href,
    ALD_17: new URL('./images/projects/Projetos em Aldeia/ALD_16.jpg', import.meta.url).href,
    ALD_18: new URL('./images/projects/Projetos em Aldeia/ALD_17.jpg', import.meta.url).href,
    ALD_19: new URL('./images/projects/Projetos em Aldeia/ALD_18.jpg', import.meta.url).href,
    ALD_20: new URL('./images/projects/Projetos em Aldeia/ALD_19.jpg', import.meta.url).href,
    ALD_21: new URL('./images/projects/Projetos em Aldeia/ALD_20.jpg', import.meta.url).href,
    ALD_22: new URL('./images/projects/Projetos em Aldeia/ALD_21.jpg', import.meta.url).href,

    //Projetos em Gravatá
    GVT_00: new URL('./images/projects/Projetos em Gravatá/GVT_00.jpg', import.meta.url).href,
    GVT_01: new URL('./images/projects/Projetos em Gravatá/GVT_01.jpg', import.meta.url).href,
    GVT_02: new URL('./images/projects/Projetos em Gravatá/GVT_02.JPG', import.meta.url).href,
    GVT_03: new URL('./images/projects/Projetos em Gravatá/GVT_03.JPG', import.meta.url).href,
    GVT_04: new URL('./images/projects/Projetos em Gravatá/GVT_04.JPG', import.meta.url).href,
    GVT_05: new URL('./images/projects/Projetos em Gravatá/GVT_05.jpg', import.meta.url).href,
    GVT_06: new URL('./images/projects/Projetos em Gravatá/GVT_06.jpg', import.meta.url).href,
    GVT_07: new URL('./images/projects/Projetos em Gravatá/GVT_07.JPG', import.meta.url).href,
    GVT_08: new URL('./images/projects/Projetos em Gravatá/GVT_08.jpg', import.meta.url).href,
    GVT_09: new URL('./images/projects/Projetos em Gravatá/GVT_09.jpg', import.meta.url).href,
    GVT_10: new URL('./images/projects/Projetos em Gravatá/GVT_10.png', import.meta.url).href,

    //Sítio Tanque
    STO_00: new URL('./images/projects/SitioTanque/STO_00.JPG', import.meta.url).href,
    STO_01: new URL('./images/projects/SitioTanque/STO_01.JPG', import.meta.url).href,
    STO_02: new URL('./images/projects/SitioTanque/STO_02.JPG', import.meta.url).href,
    STO_03: new URL('./images/projects/SitioTanque/STO_03.JPG', import.meta.url).href,
    STO_04: new URL('./images/projects/SitioTanque/STO_04.jpg', import.meta.url).href,
    STO_05: new URL('./images/projects/SitioTanque/STO_06.jpg', import.meta.url).href,

    //Outros Projetos
    DIV_00: new URL('./images/projects/Outros Projetos/DIV_00.jpg', import.meta.url).href,
    DIV_01: new URL('./images/projects/Outros Projetos/DIV_01.jpg', import.meta.url).href,
    DIV_02: new URL('./images/projects/Outros Projetos/DIV_02.jpg', import.meta.url).href,
    DIV_03: new URL('./images/projects/Outros Projetos/DIV_03.jpg', import.meta.url).href,
    DIV_04: new URL('./images/projects/Outros Projetos/DIV_04.jpg', import.meta.url).href,
    DIV_05: new URL('./images/projects/Outros Projetos/DIV_05.jpg', import.meta.url).href,
    DIV_06: new URL('./images/projects/Outros Projetos/DIV_06.jpg', import.meta.url).href,
    DIV_07: new URL('./images/projects/Outros Projetos/DIV_07.jpg', import.meta.url).href,
    DIV_08: new URL('./images/projects/Outros Projetos/DIV_08.jpg', import.meta.url).href,

}

export default IMG; 