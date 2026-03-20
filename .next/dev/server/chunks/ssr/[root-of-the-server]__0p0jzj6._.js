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
"[project]/pages/proyectos/[id].js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ProjectPage,
    "getStaticPaths",
    ()=>getStaticPaths,
    "getStaticProps",
    ()=>getStaticProps
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$datos$2e$json$2e5b$json$5d2e$cjs__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/datos.json.[json].cjs [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$projectDetails$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/data/projectDetails.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$head$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/head.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
(()=>{
    const e = new Error("Cannot find module '../../components/LanguageContext'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
;
;
;
;
;
;
function ProjectPage({ proyecto }) {
    const { lang } = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useContext"])(LanguageContext);
    const details = __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$projectDetails$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"][proyecto.id];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$head$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("title", {
                    children: [
                        proyecto.nombre,
                        " — ",
                        lang === 'es' ? 'Proyecto' : 'Project'
                    ]
                }, void 0, true, {
                    fileName: "[project]/pages/proyectos/[id].js",
                    lineNumber: 14,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/pages/proyectos/[id].js",
                lineNumber: 13,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("main", {
                className: "container my-5",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                    className: "row",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                            className: "col-md-8",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h1", {
                                    children: proyecto.nombre
                                }, void 0, false, {
                                    fileName: "[project]/pages/proyectos/[id].js",
                                    lineNumber: 20,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                    className: "text-muted",
                                    children: [
                                        proyecto.tecnologias,
                                        " · ",
                                        proyecto.fecha
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/pages/proyectos/[id].js",
                                    lineNumber: 21,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("img", {
                                    src: `/img/${proyecto.id}.png`,
                                    alt: proyecto.nombre,
                                    className: "img-fluid mb-4"
                                }, void 0, false, {
                                    fileName: "[project]/pages/proyectos/[id].js",
                                    lineNumber: 22,
                                    columnNumber: 13
                                }, this),
                                lang === 'es' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["Fragment"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h3", {
                                            children: "Problema"
                                        }, void 0, false, {
                                            fileName: "[project]/pages/proyectos/[id].js",
                                            lineNumber: 26,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                            children: details?.es?.problema
                                        }, void 0, false, {
                                            fileName: "[project]/pages/proyectos/[id].js",
                                            lineNumber: 27,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h3", {
                                            children: "Solución"
                                        }, void 0, false, {
                                            fileName: "[project]/pages/proyectos/[id].js",
                                            lineNumber: 28,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                            children: details?.es?.solucion
                                        }, void 0, false, {
                                            fileName: "[project]/pages/proyectos/[id].js",
                                            lineNumber: 29,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h3", {
                                            children: "Stack"
                                        }, void 0, false, {
                                            fileName: "[project]/pages/proyectos/[id].js",
                                            lineNumber: 30,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                            children: details?.es?.stack
                                        }, void 0, false, {
                                            fileName: "[project]/pages/proyectos/[id].js",
                                            lineNumber: 31,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h3", {
                                            children: "IA usada"
                                        }, void 0, false, {
                                            fileName: "[project]/pages/proyectos/[id].js",
                                            lineNumber: 32,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                            children: details?.es?.ia
                                        }, void 0, false, {
                                            fileName: "[project]/pages/proyectos/[id].js",
                                            lineNumber: 33,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h3", {
                                            children: "Impacto"
                                        }, void 0, false, {
                                            fileName: "[project]/pages/proyectos/[id].js",
                                            lineNumber: 34,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                            children: details?.es?.impacto
                                        }, void 0, false, {
                                            fileName: "[project]/pages/proyectos/[id].js",
                                            lineNumber: 35,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["Fragment"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h3", {
                                            children: "Problem"
                                        }, void 0, false, {
                                            fileName: "[project]/pages/proyectos/[id].js",
                                            lineNumber: 39,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                            children: details?.en?.problem
                                        }, void 0, false, {
                                            fileName: "[project]/pages/proyectos/[id].js",
                                            lineNumber: 40,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h3", {
                                            children: "Solution"
                                        }, void 0, false, {
                                            fileName: "[project]/pages/proyectos/[id].js",
                                            lineNumber: 41,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                            children: details?.en?.solution
                                        }, void 0, false, {
                                            fileName: "[project]/pages/proyectos/[id].js",
                                            lineNumber: 42,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h3", {
                                            children: "Tech stack"
                                        }, void 0, false, {
                                            fileName: "[project]/pages/proyectos/[id].js",
                                            lineNumber: 43,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                            children: details?.en?.stack
                                        }, void 0, false, {
                                            fileName: "[project]/pages/proyectos/[id].js",
                                            lineNumber: 44,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h3", {
                                            children: "AI used"
                                        }, void 0, false, {
                                            fileName: "[project]/pages/proyectos/[id].js",
                                            lineNumber: 45,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                            children: details?.en?.ai
                                        }, void 0, false, {
                                            fileName: "[project]/pages/proyectos/[id].js",
                                            lineNumber: 46,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h3", {
                                            children: "Impact"
                                        }, void 0, false, {
                                            fileName: "[project]/pages/proyectos/[id].js",
                                            lineNumber: 47,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                            children: details?.en?.impact
                                        }, void 0, false, {
                                            fileName: "[project]/pages/proyectos/[id].js",
                                            lineNumber: 48,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("a", {
                                    className: "btn btn-primary mt-3",
                                    href: proyecto.link,
                                    target: "_blank",
                                    rel: "noreferrer",
                                    children: lang === 'es' ? 'Ver en vivo' : 'View live'
                                }, void 0, false, {
                                    fileName: "[project]/pages/proyectos/[id].js",
                                    lineNumber: 52,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/pages/proyectos/[id].js",
                            lineNumber: 19,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("aside", {
                            className: "col-md-4",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                className: "card",
                                style: {
                                    padding: 16,
                                    background: 'rgba(255,255,255,0.02)'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h5", {
                                        children: lang === 'es' ? 'Detalles rápidos' : 'Quick details'
                                    }, void 0, false, {
                                        fileName: "[project]/pages/proyectos/[id].js",
                                        lineNumber: 56,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("strong", {
                                                children: [
                                                    lang === 'es' ? 'Fecha' : 'Date',
                                                    ":"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/pages/proyectos/[id].js",
                                                lineNumber: 57,
                                                columnNumber: 18
                                            }, this),
                                            " ",
                                            proyecto.fecha
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/pages/proyectos/[id].js",
                                        lineNumber: 57,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("strong", {
                                                children: "Stack:"
                                            }, void 0, false, {
                                                fileName: "[project]/pages/proyectos/[id].js",
                                                lineNumber: 58,
                                                columnNumber: 18
                                            }, this),
                                            " ",
                                            proyecto.tecnologias
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/pages/proyectos/[id].js",
                                        lineNumber: 58,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("strong", {
                                                children: [
                                                    lang === 'es' ? 'Tipo' : 'Type',
                                                    ":"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/pages/proyectos/[id].js",
                                                lineNumber: 59,
                                                columnNumber: 18
                                            }, this),
                                            " ",
                                            proyecto.tipo
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/pages/proyectos/[id].js",
                                        lineNumber: 59,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/pages/proyectos/[id].js",
                                lineNumber: 55,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/pages/proyectos/[id].js",
                            lineNumber: 54,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/pages/proyectos/[id].js",
                    lineNumber: 18,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/pages/proyectos/[id].js",
                lineNumber: 17,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
async function getStaticPaths() {
    const proyectos = __TURBOPACK__imported__module__$5b$project$5d2f$datos$2e$json$2e5b$json$5d2e$cjs__$5b$ssr$5d$__$28$ecmascript$29$__["default"] && __TURBOPACK__imported__module__$5b$project$5d2f$datos$2e$json$2e5b$json$5d2e$cjs__$5b$ssr$5d$__$28$ecmascript$29$__["default"].portafolio || [];
    const paths = proyectos.map((p)=>({
            params: {
                id: String(p.id)
            }
        }));
    return {
        paths,
        fallback: false
    };
}
async function getStaticProps({ params }) {
    const proyectos = __TURBOPACK__imported__module__$5b$project$5d2f$datos$2e$json$2e5b$json$5d2e$cjs__$5b$ssr$5d$__$28$ecmascript$29$__["default"] && __TURBOPACK__imported__module__$5b$project$5d2f$datos$2e$json$2e5b$json$5d2e$cjs__$5b$ssr$5d$__$28$ecmascript$29$__["default"].portafolio || [];
    const proyecto = proyectos.find((p)=>String(p.id) === String(params.id)) || null;
    return {
        props: {
            proyecto
        }
    };
}
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__0p0jzj6._.js.map