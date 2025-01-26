import * as React from "react";
import { NavigationMenu } from "radix-ui";
import classNames from "classnames";
import { CaretDownIcon } from "@radix-ui/react-icons";
import styles from "./styles.module.css";
import Image from "next/image";

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
								<Image
									src='https://licuru.github.io/agroecology-ecommerce-ui/logo-completo.jpg'
									alt='logo do Livres'
									width={200}
									height={200}
								/>
							</li>
							<ListItem href="https://stitches.dev/" title="Senha">
								Alteração da senhaaaaaaaaaaaa
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
						ola
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