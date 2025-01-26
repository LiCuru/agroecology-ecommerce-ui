import * as React from "react";
import { NavigationMenu } from "radix-ui";
import classNames from "classnames";
import { CaretDownIcon } from "@radix-ui/react-icons";
import styles from "./styles.module.css";
import { Link } from "lucide-react";

const NavigationMenuDemo = () => {
	return (
		<NavigationMenu.Root className={styles.Root}>
			<NavigationMenu.List className={styles.MenuList}>
				<NavigationMenu.Item>
					<NavigationMenu.Trigger className={styles.Trigger}>
						Meu Perfil <CaretDownIcon className={styles.CaretDown} aria-hidden />
					</NavigationMenu.Trigger>
					<NavigationMenu.Content className={styles.Content}>
						<ul className={`${styles.List} one`}>
							<li style={{ gridRow: "span 3" }}>
								<NavigationMenu.Link asChild>
									<Link className={styles.Callout} href="/">
										<svg
											aria-hidden
											width="38"
											height="38"
											viewBox="0 0 25 25"
											fill="white"
										>
											<path d="M12 25C7.58173 25 4 21.4183 4 17C4 12.5817 7.58173 9 12 9V25Z"></path>
											<path d="M12 0H4V8H12V0Z"></path>
											<path d="M17 8C19.2091 8 21 6.20914 21 4C21 1.79086 19.2091 0 17 0C14.7909 0 13 1.79086 13 4C13 6.20914 14.7909 8 17 8Z"></path>
										</svg>
										<div className={styles.CalloutHeading}>
											Radix Primitives
										</div>
										<p className={styles.CalloutText}>
											Unstyled, accessible components for React.
										</p>
									</Link>
								</NavigationMenu.Link>
							</li>

							<ListItem href="https://stitches.dev/" title="Senha">
								Alteração da senha
							</ListItem>
							<ListItem href="/colors" title="Endereço">
								Atualização de endereço
							</ListItem>
							<ListItem href="https://icons.radix-ui.com/" title="demais dados">
								Atualização de outros dados pessoais
							</ListItem>
						</ul>
					</NavigationMenu.Content>
				</NavigationMenu.Item>

				<NavigationMenu.Item>
					<NavigationMenu.Trigger className={styles.Trigger}>
						Cestas <CaretDownIcon className={styles.CaretDown} aria-hidden />
					</NavigationMenu.Trigger>
					<NavigationMenu.Content className={styles.Content}>
						<ul className={`${styles.List} two`}>
							<ListItem
								title="Variáveis"
								href="/primitives/docs/overview/introduction"
							>
								Escolha as variáveis da semana
							</ListItem>
							<ListItem
								title="Pedidos Extras"
								href="/primitives/docs/overview/getting-started"
							>
								Escolha os pedidos extras da semana
							</ListItem>
							<ListItem
								title="Cesta Periódica"
								href="/primitives/docs/guides/animation"
							>
								Verifique e edite sua cesta semanal ou quinzenal
							</ListItem>
							<ListItem
								title="Histórico de Cestas"
								href="/primitives/docs/overview/accessibility"
							>
								Verifique suas cestas passadas
							</ListItem>
							<ListItem title="Cesta Avulsa" href="/primitives/docs/guides/styling">
								Peça uma cesta de produtos independente dos produtos semanais
							</ListItem>
						</ul>
					</NavigationMenu.Content>
				</NavigationMenu.Item>

				<NavigationMenu.Item>
					<NavigationMenu.Link
						className={styles.Link}
						href="https://github.com/radix-ui"
					>
						Sair
					</NavigationMenu.Link>
				</NavigationMenu.Item>

				<NavigationMenu.Indicator className={styles.Indicator}>
					<div className={styles.Arrow} />
				</NavigationMenu.Indicator>
			</NavigationMenu.List>

			<div className={styles.ViewportPosition}>
				<NavigationMenu.Viewport className={styles.Viewport} />
			</div>
		</NavigationMenu.Root>
	);
};


const ListItem = React.forwardRef<
React.ElementRef<"a">,
React.ComponentPropsWithoutRef<"a">
>(
	({ className, children, title, ...props }, forwardedRef) => (
		<li>
			<NavigationMenu.Link asChild>
				<a
					className={classNames(styles.ListItemLink, className)}
					{...props}
					ref={forwardedRef}
				>
					<div className={styles.ListItemHeading}>{title}</div>
					<p className={styles.ListItemText}>{children}</p>
				</a>
			</NavigationMenu.Link>
		</li>
	),
);

ListItem.displayName = "ListItem"

export default NavigationMenuDemo;