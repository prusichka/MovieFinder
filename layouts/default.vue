<template>
	<div class="common-layout">
		<el-container>
			<el-header class="mb-6">
				<el-row align="middle">
					<el-col
						:xs="24"
						:span="8">
						<NuxtLink to="/">
							<h1 class="text-[34px]">Movie Finder</h1>
						</NuxtLink>
					</el-col>
					<el-col
						class="flex justify-center"
						:xs="18"
						:span="8">
						<GlobalSearch />
					</el-col>
					<el-col
						class="text-end"
						:xs="6"
						:span="8">
						<NuxtLink to="/create">
							<el-text
								class="mx-1"
								size="large"
								type="success"
								>Create</el-text
							>
						</NuxtLink>
					</el-col>
				</el-row>
			</el-header>

			<el-main>
				<slot />
			</el-main>
		</el-container>
	</div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
