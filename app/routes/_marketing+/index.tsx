import { type MetaFunction } from '@remix-run/node'
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from '#app/components/ui/tooltip.tsx'
import { cn } from '#app/utils/misc.tsx'
import { logos } from './logos/logos.ts'

export const meta: MetaFunction = () => [{ title: 'Realfagskjelleren' }]

// Tailwind Grid cell classes lookup
const columnClasses: Record<(typeof logos)[number]['column'], string> = {
	1: 'xl:col-start-1',
	2: 'xl:col-start-2',
	3: 'xl:col-start-3',
	4: 'xl:col-start-4',
	5: 'xl:col-start-5',
}
const rowClasses: Record<(typeof logos)[number]['row'], string> = {
	1: 'xl:row-start-1',
	2: 'xl:row-start-2',
	3: 'xl:row-start-3',
	4: 'xl:row-start-4',
	5: 'xl:row-start-5',
	6: 'xl:row-start-6',
}

export default function Index() {
	return (
		<main className="font-poppins grid h-full place-items-center">
			<div className="grid place-items-center px-4 py-16 xl:grid-cols-2 xl:gap-24">
				<div className="flex max-w-md flex-col items-center text-center xl:order-2 xl:items-start xl:text-left">
					<svg
						className="animate-slide-top text-foreground [animation-fill-mode:backwards] xl:-mt-4 xl:animate-slide-left xl:[animation-delay:0.5s] xl:[animation-fill-mode:backwards]"
						version="1.0"
						xmlns="http://www.w3.org/2000/svg"
						width="128"
						height="128"
						viewBox="0 0 256.000000 256.000000"
						preserveAspectRatio="xMidYMid meet"
					>
						<g
							transform="translate(0.000000,256.000000) scale(0.1,-0.100000)"
							fill="var(--rfk-orange)"
							stroke="none"
						>
							<path
								d="M743 2527 c-16 -18 -40 -60 -53 -93 -50 -123 -249 -425 -311 -471
						-88 -65 -114 -92 -101 -105 11 -11 48 -4 109 19 19 7 -32 -74 -151 -243 -70
						-98 -102 -134 -162 -179 -89 -67 -97 -91 -26 -81 26 3 61 16 77 29 21 15 49
						23 95 27 l65 5 -2 57 -2 58 57 47 c100 84 188 180 221 243 l33 61 76 -6 c141
						-11 266 -27 371 -46 141 -26 255 -25 298 1 18 11 56 56 86 103 71 109 118 148
						212 176 41 13 81 21 89 19 19 -4 128 -150 118 -159 -4 -4 -46 -10 -94 -14 -81
						-6 -87 -5 -98 14 -18 35 -30 24 -30 -27 0 -52 -14 -73 -57 -86 -23 -7 -32 -26
						-13 -26 6 0 10 -12 10 -28 0 -15 7 -38 16 -51 12 -17 13 -26 5 -34 -6 -6 -11
						-30 -11 -53 0 -40 2 -43 35 -54 29 -9 34 -16 30 -33 -10 -47 -44 -461 -50
						-617 -12 -306 25 -606 90 -745 38 -80 123 -168 200 -206 61 -30 67 -31 172
						-27 94 3 115 7 167 32 72 35 180 136 223 208 57 94 122 316 123 416 l0 42 -48
						0 -48 0 -18 -71 c-16 -61 -26 -80 -70 -124 -51 -53 -120 -85 -185 -85 -63 0
						-143 33 -196 81 -98 90 -121 188 -112 474 7 215 30 525 52 695 8 63 15 127 15
						142 l0 28 -144 0 -143 0 -7 -37 c-3 -21 -6 -54 -7 -73 -1 -56 -16 -6 -20 68
						-6 91 2 95 208 100 159 4 165 5 180 28 16 26 11 40 -76 203 -22 40 -43 92 -47
						114 -5 35 -3 44 16 59 29 23 55 23 80 -2 27 -27 25 -64 -2 -83 -23 -16 -22
						-16 17 -16 22 -1 50 6 62 14 20 14 22 13 37 -25 26 -66 19 -120 -15 -120 -27
						0 -23 -18 6 -32 32 -15 70 4 84 41 8 23 10 23 10 5 2 -50 -81 -100 -116 -72
						-22 17 -15 -10 7 -32 13 -13 33 -20 61 -20 50 0 74 12 94 48 15 26 16 26 9 2
						-9 -36 -23 -50 -69 -72 l-40 -18 44 4 c24 3 58 14 75 26 l31 22 -33 -32 c-41
						-39 -34 -51 15 -25 58 31 75 68 71 150 l-4 70 36 -37 c41 -41 74 -53 124 -44
						50 9 70 37 61 83 l-7 38 -14 -27 c-16 -30 -43 -48 -71 -48 -11 1 -5 7 17 18
						39 19 63 73 42 94 -9 9 -12 8 -12 -3 0 -25 -34 -49 -69 -49 -41 0 -64 13 -90
						49 l-20 28 37 -19 c32 -15 44 -16 70 -7 36 12 48 39 32 69 -14 27 -50 27 -50
						0 0 -22 15 -27 23 -7 4 7 6 6 6 -4 1 -25 -29 -32 -52 -12 -25 23 -35 51 -47
						130 -5 37 -16 74 -26 84 -16 18 -16 19 -1 13 37 -14 14 18 -25 36 -56 25 -140
						25 -195 0 l-42 -19 -22 27 c-18 24 -22 25 -32 11 -8 -11 -26 -15 -57 -13 -53
						2 -70 -9 -70 -46 0 -36 -24 -55 -88 -70 -45 -10 -60 -10 -102 4 -66 22 -87 20
						-115 -9 -18 -17 -25 -35 -25 -64 0 -34 -6 -44 -40 -74 -68 -58 -151 -97 -206
						-97 l-49 0 -139 146 c-77 81 -166 168 -198 195 -51 42 -65 49 -102 49 -37 0
						-48 -5 -73 -33z m147 -309 l61 -103 -58 -8 c-164 -21 -271 -40 -303 -53 -35
						-14 -34 -14 15 31 108 99 155 148 182 190 15 25 31 45 35 45 4 0 35 -46 68
						-102z"
							/>
							<path
								d="M765 1828 c-2 -7 -13 -143 -25 -303 -25 -337 -40 -453 -81 -625 -37
						-153 -73 -230 -185 -390 -121 -174 -128 -190 -132 -285 -4 -77 -2 -82 30 -129
						46 -69 100 -96 191 -96 43 0 82 6 103 16 195 93 307 590 390 1732 l7 92 -147
						0 c-109 0 -148 -3 -151 -12z"
							/>
						</g>
					</svg>
					<h1
						data-heading
						className="mt-8 animate-slide-top text-4xl font-medium text-[color:var(--rfk-orange)] [animation-delay:0.3s] [animation-fill-mode:backwards] md:text-5xl xl:mt-4 xl:animate-slide-left xl:text-6xl xl:[animation-delay:0.8s] xl:[animation-fill-mode:backwards]"
					>
						Realfagskjelleren
					</h1>
					<p
						data-paragraph
						className="mt-6 animate-slide-top text-xl/7 text-muted-foreground [animation-delay:0.8s] [animation-fill-mode:backwards] xl:mt-8 xl:animate-slide-left xl:text-xl/6 xl:leading-10 xl:[animation-delay:1s] xl:[animation-fill-mode:backwards]"
					>
						Kjelleren for linjeforeningene{' '}
						<a
							className="underline hover:no-underline"
							href="https://online.ntnu.no/"
						>
							Online,
						</a>{' '}
						<a
							className="underline hover:no-underline"
							href="https://www.deltahouse.no/"
						>
							Delta,
						</a>{' '}
						<a
							className="underline hover:no-underline"
							href="https://spanskroret.no/"
						>
							Spanskrøret
						</a>{' '}
						og{' '}
						<a
							className="underline hover:no-underline"
							href="https://www.volvox.no/"
						>
							Volvox & Alkymisten!
						</a>{' '}
						<br />
						Åpent for alle over 18 år, hver fredag i semesteret fra kl. 18:00!
						Velkommen!
					</p>
				</div>
				<ul className="mt-16 flex max-w-3xl flex-wrap justify-center gap-2 sm:gap-4 xl:mt-0 xl:grid xl:grid-flow-col xl:grid-cols-5 xl:grid-rows-6">
					<TooltipProvider>
						{logos.map((logo, i) => (
							<li
								key={logo.href}
								className={cn(
									columnClasses[logo.column],
									rowClasses[logo.row],
									'animate-roll-reveal [animation-fill-mode:backwards]',
								)}
								style={{ animationDelay: `${i * 0.07}s` }}
							>
								<Tooltip>
									<TooltipTrigger asChild>
										<a
											href={logo.href}
											className="grid size-20 place-items-center rounded-2xl bg-violet-600/10 p-4 transition hover:-rotate-6 hover:bg-violet-600/15 dark:bg-violet-200 dark:hover:bg-violet-100 sm:size-24"
										>
											<img src={logo.src} alt="" />
										</a>
									</TooltipTrigger>
									<TooltipContent>{logo.alt}</TooltipContent>
								</Tooltip>
							</li>
						))}
					</TooltipProvider>
				</ul>
			</div>
		</main>
	)
}
