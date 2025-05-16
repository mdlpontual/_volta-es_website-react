import React from "react";
import IMG from "../../../assets/imagesHub";

const projectsData = {
    industriaCamaragibe: {
        title: "INDÚSTRIA EM CAMARAGIBE",
        subtitle: "Usina para uso industrial - Camaragibe, Pernambuco",
        year: "2024",
        modules: "1.027 módulos",
        powerOutput: "530 kWp",
        images: [IMG.IND_CA_01, IMG.IND_CA_02, IMG.IND_CA_03, IMG.IND_CA_04, IMG.IND_CA_05, IMG.IND_CA_06, IMG.IND_CA_07],
        menuPage: "indCam",
        description: "Este é o maior projeto realizado pela Volta Engenharia até o presente momento. Gera energia sustentável para uma grande indústria da nossa região metropolitana, com 1.027 módulos fotovoltaicos, 530 kWp de potência e seis grandes inversores de última geração de fabricação Austríaca que começaram a operar em meados de 2024."
    },
    sitioTanque: {
        title: "PROJETO ACENDE",
        subtitle: "Usina de geração compartilhada em Gravatá, Pernambuco",
        year: "2022",
        modules: "86 módulos",
        powerOutput: "44,3 kWp",
        images: [IMG.STO_00, IMG.STO_01, IMG.STO_02, IMG.STO_03, IMG.STO_04, IMG.STO_05],
        menuPage: "prjGvt",
        description: "Esta usina foi implantada para atender uma associação de consumidores de energia solar. Localizada na área rural de Gravatá, ela compartilha toda a energia solar gerada com os seus associados, que se situam espalhados por toda região metropolitana, zona da mata e agreste de Pernambuco. Com 204 módulos fotovoltaicos e 108,1 kWp de potência, espalha energia renovável por todo o estado."
    },
    condMariaFarinha: {
        title: "RESIDÊNCIAL EM MARIA FARINHA",
        subtitle: "Condomínio residencial em Maria Farinha - Pernambuco",
        year: "2023",
        modules: "107 módulos",
        powerOutput: "51,1 kWp",
        images: [IMG.MA_FA_00, IMG.MA_FA_01, IMG.MA_FA_02, IMG.MA_FA_03, IMG.MA_FA_04],
        menuPage: "marFar",
        description: "Foi com muita satisfação que entregamos este sistema solar em um condomínio na beira mar de Maria Farinha. A geração de energia elétrica abastece todo a área comum do condomínio com 107 módulos e 51,1 kWp de potencia total instalada. A volta também instalou sistemas menores em duas residências no mesmo condominio."
    },
    fazendaCamarão: {
        title: "PROJETO MOJEIRO",
        subtitle: "Fazenda de carcinicultura - Paraíba",
        year: "2019",
        modules: "72 módulos",
        powerOutput: "25 kWp",
        images: [IMG.FCAM_00, IMG.FCAM_01, IMG.FCAM_02, IMG.FCAM_03],
        menuPage: "mojeiro",
        description: "Projeto Mojeiro - É uma usina fotovoltaica de solo que gera energia limpa e renovável para uma fazenda de criação de camarão (carcinicultura) no interior da Paraíba."
    },
    projetosAldeia: {
        title: "PROJETOS EM ALDEIA",
        subtitle: "Diversos projetos residênciais em Aldeia - Camaragibe, Pernambuco",
        year: "2017-2025",
        modules: "203 módulos",
        powerOutput: "89,6 kWp",
        images: [IMG.ALD_00, IMG.ALD_01, IMG.ALD_02, IMG.ALD_03, IMG.ALD_04, IMG.ALD_05, IMG.ALD_06, IMG.ALD_07, IMG.ALD_08, IMG.ALD_09, IMG.ALD_10, IMG.ALD_11, IMG.ALD_12, IMG.ALD_13, IMG.ALD_14, IMG.ALD_15, IMG.ALD_16, IMG.ALD_17, IMG.ALD_18, IMG.ALD_19, IMG.ALD_20, IMG.ALD_21, IMG.ALD_22],
        menuPage: "prjAld",
        description: "Instalamos diversos sistemas de geração fotovoltaica na região de Aldeia, desde a primeira obra meados de 2017 até o presente. Diversas famílias são beneficiadas pela energia renovável do sol. São 203 módulos com 89,6 kWp de potência acumulados entre diferentes projetos."
    },
    projetosGravatá: {
        title: "PROJETOS EM GRAVATÁ",
        subtitle: "Diversos projetos residênciais em Gravatá, Pernambuco",
        year: "2017-2025",
        modules: "86 módulos",
        powerOutput: "44,3 kWp",
        images: [IMG.GVT_00, IMG.GVT_01, IMG.GVT_02, IMG.GVT_03, IMG.GVT_04, IMG.GVT_05, IMG.GVT_06, IMG.GVT_07, IMG.GVT_08, IMG.GVT_09, IMG.GVT_10],
        menuPage: "prjGvt",
        description: "Instalamos diversos sistemas de geração fotovoltaica na região. A energia sustentável do sol é gerada nos telhados de Gravatá e atende seus proprietários em suas residências em Recife. São 86 módulos com 44,3 kWp de potência acumulados entre diferentes projetos."
    },
    projetosDiversos: {
        title: "PROJETOS DIVERSOS",
        subtitle: "Projetos diversos realizados através dos anos - Pernambuco",
        year: "2015-",
        images: [IMG.DIV_00, IMG.DIV_01, IMG.DIV_02, IMG.DIV_03, IMG.DIV_04, IMG.DIV_05, IMG.DIV_06, IMG.DIV_07, IMG.DIV_08],
        menuPage: "prjGvt",
        description: "Por todo o estado de Pernambuco, passando por litoral, região metropolitana e até mesmo no agreste, encontramos painéis fotovoltaicos instalados pela Volta. Desde o primeiríssimo em 2015 até o momento, e estes números estão aumentando."
    },
};

export default projectsData;