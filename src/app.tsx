import React from 'react';
import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarItem, SidebarLabel, SidebarLayout, SidebarTrigger, useSidebar } from '@/components/sidebar';

export default function App() {
	return (
		<div className="min-h-screen w-full">
			<SidebarLayout>
				<Sidebar>
					<SidebarHeader>
						Header
						<SidebarTrigger>trigger</SidebarTrigger>
					</SidebarHeader>
					<SidebarContent>
						<SidebarItem>
							<SidebarLabel>Item 1</SidebarLabel>
						</SidebarItem>
						<SidebarItem>
							<SidebarLabel>Item 2</SidebarLabel>
						</SidebarItem>
						<SidebarItem>
							<SidebarLabel>Item 3</SidebarLabel>
						</SidebarItem>
					</SidebarContent>
					<SidebarFooter>Footer</SidebarFooter>
				</Sidebar>
				<div>
					Foobar
					<SidebarTrigger>trigger</SidebarTrigger>
				</div>
			</SidebarLayout>
		</div>
	);
}
