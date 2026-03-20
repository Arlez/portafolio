module.exports = [
"[project]/datos.json.[json].cjs [ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = {
    "portafolio": [
        {
            "id": 1,
            "nombre": "Vivir Mejor",
            "desc": "Copiloto de salud para pacientes crónicos que maximiza calidad de vida, adherencia y alertas tempranas.",
            "tecnologias": "React, PWA, IndexedDB, AI",
            "link": "https://vivirmejorapp.netlify.app",
            "tipo": 2,
            "fecha": "19-03-2026",
            "img": "/img/vivirmejor.png"
        },
        {
            "id": 2,
            "nombre": "SetFlow",
            "desc": "Asistente de entrenamiento que guía rutinas, controla descansos y genera planes con IA.",
            "tecnologias": "PWA, React, IA",
            "link": "https://mysetflow.netlify.app/",
            "tipo": 2,
            "fecha": "19-03-2026",
            "img": "/img/setflow.png"
        }
    ]
};
}),
"[project]/data/projectDetails.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
const projectDetails = {
    1: {
        es: {
            titulo: 'Digital Classbook',
            problema: 'Material académico desorganizado y carga administrativa alta para docentes.',
            solucion: 'Plataforma full‑stack que publica contenido curricular con rutas de aprendizaje personalizadas y generación automática de ejercicios.',
            stack: 'Next.js, NestJS, PostgreSQL, Docker, Redis',
            ia: 'Resúmenes adaptativos, generación de preguntas mediante prompts y asistente docente para sugerir actividades.',
            impacto: 'Reducción del 60% en tiempo de preparación docente; +12% de retención en pilotos.'
        },
        en: {
            title: 'Digital Classbook',
            problem: 'Disorganized academic material and high admin workload for teachers.',
            solution: 'Full‑stack platform publishing curriculum with personalized learning paths and auto exercise generation.',
            stack: 'Next.js, NestJS, PostgreSQL, Docker, Redis',
            ai: 'Adaptive summaries, question generation via prompts and a teacher assistant that suggests activities.',
            impact: '60% reduction in teacher prep time; +12% student retention in pilots.'
        }
    },
    2: {
        es: {
            titulo: 'EdTech Analytics & Insights',
            problema: 'Falta de visión accionable sobre engagement y rendimiento.',
            solucion: 'Pipeline analítico y dashboard que correlaciona actividad con desempeño y propone intervenciones.',
            stack: 'Node.js, PostgreSQL, Next.js, ETL jobs',
            ia: 'Clasificación de interacciones y generación automática de insights y sugerencias de intervención.',
            impacto: 'Identificación temprana de estudiantes en riesgo; reducción de abandono en pilotos.'
        },
        en: {
            title: 'EdTech Analytics & Insights',
            problem: 'Lack of actionable analytics linking engagement to outcomes.',
            solution: 'Analytics pipeline and dashboard correlating activity with performance and recommending interventions.',
            stack: 'Node.js, PostgreSQL, Next.js, ETL jobs',
            ai: 'Interaction classification and auto‑generated insights with intervention suggestions.',
            impact: 'Early identification of at‑risk students; reduced dropout in pilots.'
        }
    },
    3: {
        es: {
            titulo: 'AI‑assisted Developer Tools',
            problema: 'Ciclos de desarrollo lentos por tareas repetitivas.',
            solucion: 'Herramientas que usan LLMs para generar tests, documentación y plantillas de endpoints.',
            stack: 'Node.js, TypeScript, OpenAI, GitHub Actions',
            ia: 'Prompts especializados para generar código y tests, revisión automatizada de PRs.',
            impacto: 'Aceleró la entrega de features ~30% en sprints donde se usó la herramienta.'
        },
        en: {
            title: 'AI‑assisted Developer Tools',
            problem: 'Slow developer cycles for repetitive tasks.',
            solution: 'Tools using LLMs to generate unit tests, documentation and endpoint templates.',
            stack: 'Node.js, TypeScript, OpenAI, GitHub Actions',
            ai: 'Specialized prompts for code+tests generation and automated PR review helpers.',
            impact: '~30% faster feature delivery in sprints using the tools.'
        }
    }
};
const __TURBOPACK__default__export__ = projectDetails;
}),
"[project]/components/PortfolioGrid.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>PortfolioGrid
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$projectDetails$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/data/projectDetails.js [ssr] (ecmascript)");
;
;
;
function PortfolioGrid({ proyectos = [], home = false }) {
    const lista = home ? proyectos.filter((p)=>p.tipo === 2) : proyectos;
    const [openId, setOpenId] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(null);
    const toggle = (id)=>setOpenId(openId === id ? null : id);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                className: "d-flex flex-md-row flex-column justify-content-between align-items-center my-5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h2", {
                        className: "fw-bold mb-md-0 text-white",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("i", {
                                className: "fas fa-code"
                            }, void 0, false, {
                                fileName: "[project]/components/PortfolioGrid.js",
                                lineNumber: 13,
                                columnNumber: 54
                            }, this),
                            " Algunos de mis proyectos"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/PortfolioGrid.js",
                        lineNumber: 13,
                        columnNumber: 11
                    }, this),
                    home && proyectos.length > 6 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("a", {
                        href: "/proyectos",
                        className: "mas-proyectos titulo btn btn-outline-light",
                        children: "Ver más proyectos..."
                    }, void 0, false, {
                        fileName: "[project]/components/PortfolioGrid.js",
                        lineNumber: 15,
                        columnNumber: 13
                    }, this) : null
                ]
            }, void 0, true, {
                fileName: "[project]/components/PortfolioGrid.js",
                lineNumber: 12,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                className: "row my-5 pb-5",
                id: "listado",
                children: lista.map((p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        className: "col-md-6 col-xl-4 mt-4 portafolio Anime",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                            className: "card proyecto-card",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                    className: "card-media",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("img", {
                                            src: p.img || `/img/${p.id}.png`,
                                            className: "card-img",
                                            alt: `imagen ${p.nombre}`
                                        }, void 0, false, {
                                            fileName: "[project]/components/PortfolioGrid.js",
                                            lineNumber: 24,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                            className: "card-band",
                                            children: p.tecnologias
                                        }, void 0, false, {
                                            fileName: "[project]/components/PortfolioGrid.js",
                                            lineNumber: 25,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/PortfolioGrid.js",
                                    lineNumber: 23,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                    className: "card-body",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h3", {
                                            className: "card-title",
                                            children: p.nombre
                                        }, void 0, false, {
                                            fileName: "[project]/components/PortfolioGrid.js",
                                            lineNumber: 28,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                            className: "card-desc",
                                            children: p.desc
                                        }, void 0, false, {
                                            fileName: "[project]/components/PortfolioGrid.js",
                                            lineNumber: 29,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                            className: "card-meta",
                                            children: [
                                                p.fecha,
                                                " · ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("a", {
                                                    href: p.link,
                                                    target: "_blank",
                                                    rel: "noreferrer",
                                                    children: "Live"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/PortfolioGrid.js",
                                                    lineNumber: 30,
                                                    columnNumber: 56
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/PortfolioGrid.js",
                                            lineNumber: 30,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                            className: "card-actions mt-3",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                                className: "btn btn-sm btn-outline-primary",
                                                onClick: ()=>toggle(p.id),
                                                children: openId === p.id ? 'Ocultar / Hide' : 'Ver detalles / View details'
                                            }, void 0, false, {
                                                fileName: "[project]/components/PortfolioGrid.js",
                                                lineNumber: 32,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/PortfolioGrid.js",
                                            lineNumber: 31,
                                            columnNumber: 17
                                        }, this),
                                        openId === p.id && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                            className: "project-details mt-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("section", {
                                                    className: "es",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h4", {
                                                            children: __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$projectDetails$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"][p.id]?.es?.titulo
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/PortfolioGrid.js",
                                                            lineNumber: 37,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("strong", {
                                                                    children: "Problema:"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/PortfolioGrid.js",
                                                                    lineNumber: 38,
                                                                    columnNumber: 26
                                                                }, this),
                                                                " ",
                                                                __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$projectDetails$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"][p.id]?.es?.problema
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/PortfolioGrid.js",
                                                            lineNumber: 38,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("strong", {
                                                                    children: "Solución:"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/PortfolioGrid.js",
                                                                    lineNumber: 39,
                                                                    columnNumber: 26
                                                                }, this),
                                                                " ",
                                                                __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$projectDetails$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"][p.id]?.es?.solucion
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/PortfolioGrid.js",
                                                            lineNumber: 39,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("strong", {
                                                                    children: "Stack:"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/PortfolioGrid.js",
                                                                    lineNumber: 40,
                                                                    columnNumber: 26
                                                                }, this),
                                                                " ",
                                                                __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$projectDetails$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"][p.id]?.es?.stack
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/PortfolioGrid.js",
                                                            lineNumber: 40,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("strong", {
                                                                    children: "IA usada:"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/PortfolioGrid.js",
                                                                    lineNumber: 41,
                                                                    columnNumber: 26
                                                                }, this),
                                                                " ",
                                                                __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$projectDetails$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"][p.id]?.es?.ia
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/PortfolioGrid.js",
                                                            lineNumber: 41,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("strong", {
                                                                    children: "Impacto:"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/PortfolioGrid.js",
                                                                    lineNumber: 42,
                                                                    columnNumber: 26
                                                                }, this),
                                                                " ",
                                                                __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$projectDetails$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"][p.id]?.es?.impacto
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/PortfolioGrid.js",
                                                            lineNumber: 42,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/PortfolioGrid.js",
                                                    lineNumber: 36,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("hr", {}, void 0, false, {
                                                    fileName: "[project]/components/PortfolioGrid.js",
                                                    lineNumber: 44,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("section", {
                                                    className: "en",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h4", {
                                                            children: __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$projectDetails$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"][p.id]?.en?.title
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/PortfolioGrid.js",
                                                            lineNumber: 46,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("strong", {
                                                                    children: "Problem:"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/PortfolioGrid.js",
                                                                    lineNumber: 47,
                                                                    columnNumber: 26
                                                                }, this),
                                                                " ",
                                                                __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$projectDetails$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"][p.id]?.en?.problem
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/PortfolioGrid.js",
                                                            lineNumber: 47,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("strong", {
                                                                    children: "Solution:"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/PortfolioGrid.js",
                                                                    lineNumber: 48,
                                                                    columnNumber: 26
                                                                }, this),
                                                                " ",
                                                                __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$projectDetails$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"][p.id]?.en?.solution
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/PortfolioGrid.js",
                                                            lineNumber: 48,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("strong", {
                                                                    children: "Tech stack:"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/PortfolioGrid.js",
                                                                    lineNumber: 49,
                                                                    columnNumber: 26
                                                                }, this),
                                                                " ",
                                                                __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$projectDetails$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"][p.id]?.en?.stack
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/PortfolioGrid.js",
                                                            lineNumber: 49,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("strong", {
                                                                    children: "AI used:"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/PortfolioGrid.js",
                                                                    lineNumber: 50,
                                                                    columnNumber: 26
                                                                }, this),
                                                                " ",
                                                                __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$projectDetails$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"][p.id]?.en?.ai
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/PortfolioGrid.js",
                                                            lineNumber: 50,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("strong", {
                                                                    children: "Impact:"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/PortfolioGrid.js",
                                                                    lineNumber: 51,
                                                                    columnNumber: 26
                                                                }, this),
                                                                " ",
                                                                __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$projectDetails$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"][p.id]?.en?.impact
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/PortfolioGrid.js",
                                                            lineNumber: 51,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/PortfolioGrid.js",
                                                    lineNumber: 45,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/PortfolioGrid.js",
                                            lineNumber: 35,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/PortfolioGrid.js",
                                    lineNumber: 27,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/PortfolioGrid.js",
                            lineNumber: 22,
                            columnNumber: 13
                        }, this)
                    }, p.id, false, {
                        fileName: "[project]/components/PortfolioGrid.js",
                        lineNumber: 21,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/components/PortfolioGrid.js",
                lineNumber: 19,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
}),
"[project]/pages/index.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home,
    "getStaticProps",
    ()=>getStaticProps
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$datos$2e$json$2e5b$json$5d2e$cjs__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/datos.json.[json].cjs [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$head$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/head.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$PortfolioGrid$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/PortfolioGrid.js [ssr] (ecmascript)");
;
;
;
;
function Home({ proyectos }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$head$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("title", {
                    children: "Daniel Barrera — AI Product Engineer & Full‑Stack Developer"
                }, void 0, false, {
                    fileName: "[project]/pages/index.js",
                    lineNumber: 9,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/pages/index.js",
                lineNumber: 8,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                className: "hero",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        className: "hero-card",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h1", {
                                children: "Daniel Barrera"
                            }, void 0, false, {
                                fileName: "[project]/pages/index.js",
                                lineNumber: 14,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h2", {
                                children: "AI Product Engineer & Full‑Stack Developer"
                            }, void 0, false, {
                                fileName: "[project]/pages/index.js",
                                lineNumber: 15,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                children: "I build AI‑powered web products for education and scale. Productos impulsados por IA para transformar flujos educativos y automatizar decisiones."
                            }, void 0, false, {
                                fileName: "[project]/pages/index.js",
                                lineNumber: 16,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                className: "kpis",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                        className: "kpi",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                className: "num",
                                                children: "8+"
                                            }, void 0, false, {
                                                fileName: "[project]/pages/index.js",
                                                lineNumber: 19,
                                                columnNumber: 46
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                className: "label",
                                                children: "Years experience"
                                            }, void 0, false, {
                                                fileName: "[project]/pages/index.js",
                                                lineNumber: 19,
                                                columnNumber: 75
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/pages/index.js",
                                        lineNumber: 19,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                        className: "kpi",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                className: "num",
                                                children: "4+"
                                            }, void 0, false, {
                                                fileName: "[project]/pages/index.js",
                                                lineNumber: 20,
                                                columnNumber: 46
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                className: "label",
                                                children: "Years in EdTech"
                                            }, void 0, false, {
                                                fileName: "[project]/pages/index.js",
                                                lineNumber: 20,
                                                columnNumber: 75
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/pages/index.js",
                                        lineNumber: 20,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                        className: "kpi",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                className: "num",
                                                children: "+12%"
                                            }, void 0, false, {
                                                fileName: "[project]/pages/index.js",
                                                lineNumber: 21,
                                                columnNumber: 46
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                className: "label",
                                                children: "Retention (pilot)"
                                            }, void 0, false, {
                                                fileName: "[project]/pages/index.js",
                                                lineNumber: 21,
                                                columnNumber: 77
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/pages/index.js",
                                        lineNumber: 21,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/pages/index.js",
                                lineNumber: 18,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                style: {
                                    marginTop: '1.5rem'
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("a", {
                                    className: "btn btn-primary btn-lg",
                                    href: "mailto:dbarrera.ap@gmail.com",
                                    children: "Contact / Contactar"
                                }, void 0, false, {
                                    fileName: "[project]/pages/index.js",
                                    lineNumber: 25,
                                    columnNumber: 25
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/pages/index.js",
                                lineNumber: 24,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/pages/index.js",
                        lineNumber: 13,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        className: "hero-card",
                        style: {
                            textAlign: 'left'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h3", {
                                children: "About / Sobre mí"
                            }, void 0, false, {
                                fileName: "[project]/pages/index.js",
                                lineNumber: 30,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                children: "Full‑Stack Developer con 8+ años construyendo aplicaciones escalables; 4+ años centrado en EdTech. Actualmente diseño aplicaciones impulsadas por LLMs y automatizaciones que entregan valor real de producto."
                            }, void 0, false, {
                                fileName: "[project]/pages/index.js",
                                lineNumber: 31,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                style: {
                                    marginTop: '.5rem',
                                    color: 'var(--muted)'
                                },
                                children: "I design end‑to‑end systems, integrate LLMs for assistant features, and ship products that improve retention and operational efficiency."
                            }, void 0, false, {
                                fileName: "[project]/pages/index.js",
                                lineNumber: 32,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/pages/index.js",
                        lineNumber: 29,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/pages/index.js",
                lineNumber: 12,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("section", {
                style: {
                    marginTop: '2.5rem'
                },
                className: "container-xl",
                id: "portafolio",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h2", {
                        style: {
                            marginBottom: '1rem'
                        },
                        children: "Projects / Proyectos"
                    }, void 0, false, {
                        fileName: "[project]/pages/index.js",
                        lineNumber: 37,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$PortfolioGrid$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                        proyectos: proyectos,
                        home: true
                    }, void 0, false, {
                        fileName: "[project]/pages/index.js",
                        lineNumber: 38,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/pages/index.js",
                lineNumber: 36,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("section", {
                className: "container-xl my-5 py-5",
                id: "ai",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h2", {
                        children: "AI Work / Enfoque en IA"
                    }, void 0, false, {
                        fileName: "[project]/pages/index.js",
                        lineNumber: 42,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("strong", {
                                children: "ES:"
                            }, void 0, false, {
                                fileName: "[project]/pages/index.js",
                                lineNumber: 43,
                                columnNumber: 20
                            }, this),
                            " AI como parte del producto — funcionalidades que cambian la experiencia del usuario: asistentes pedagógicos, generación automática de ejercicios y análisis de engagement."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/pages/index.js",
                        lineNumber: 43,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("strong", {
                                children: "EN:"
                            }, void 0, false, {
                                fileName: "[project]/pages/index.js",
                                lineNumber: 44,
                                columnNumber: 20
                            }, this),
                            " AI as part of the product — features that change user experience: pedagogical assistants, auto exercise generation and engagement analysis."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/pages/index.js",
                        lineNumber: 44,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/pages/index.js",
                lineNumber: 41,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("section", {
                className: "container-xl my-5 py-5",
                id: "skills",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h2", {
                        children: "Skills / Habilidades"
                    }, void 0, false, {
                        fileName: "[project]/pages/index.js",
                        lineNumber: 48,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        style: {
                            display: 'flex',
                            gap: '1rem',
                            flexWrap: 'wrap',
                            marginTop: '1rem'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                style: {
                                    background: 'var(--glass)',
                                    padding: '1rem',
                                    borderRadius: 8
                                },
                                children: "Next.js · React · TypeScript"
                            }, void 0, false, {
                                fileName: "[project]/pages/index.js",
                                lineNumber: 50,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                style: {
                                    background: 'var(--glass)',
                                    padding: '1rem',
                                    borderRadius: 8
                                },
                                children: "NestJS · Node.js · PHP"
                            }, void 0, false, {
                                fileName: "[project]/pages/index.js",
                                lineNumber: 51,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                style: {
                                    background: 'var(--glass)',
                                    padding: '1rem',
                                    borderRadius: 8
                                },
                                children: "Postgres · MySQL"
                            }, void 0, false, {
                                fileName: "[project]/pages/index.js",
                                lineNumber: 52,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                style: {
                                    background: 'var(--glass)',
                                    padding: '1rem',
                                    borderRadius: 8
                                },
                                children: "Prompt engineering · LLM integration"
                            }, void 0, false, {
                                fileName: "[project]/pages/index.js",
                                lineNumber: 53,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/pages/index.js",
                        lineNumber: 49,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/pages/index.js",
                lineNumber: 47,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true);
}
async function getStaticProps() {
    const proyectos = __TURBOPACK__imported__module__$5b$project$5d2f$datos$2e$json$2e5b$json$5d2e$cjs__$5b$ssr$5d$__$28$ecmascript$29$__["default"] && __TURBOPACK__imported__module__$5b$project$5d2f$datos$2e$json$2e5b$json$5d2e$cjs__$5b$ssr$5d$__$28$ecmascript$29$__["default"].portafolio || [];
    return {
        props: {
            proyectos
        }
    };
}
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__0rch-jz._.js.map