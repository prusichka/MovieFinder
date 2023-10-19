<script setup></script>
<template>
	<el-skeleton
		class="h-[500px] flex justify-evenly w-full mb-28"
		animated>
		<template #template>
			<el-skeleton-item
				v-for="el in 3"
				:key="el"
				style="height: 500px; width: 30%"
				variant="image" />
		</template>
	</el-skeleton>
	<el-skeleton animated>
		<template #template>
			<el-row :gutter="20">
				<el-col
					v-for="el in 10"
					:key="el"
					:xs="24"
					:sm="12"
					:md="8"
					:lg="6"
					:xl="6"
					class="mb-5">
					<el-skeleton-item
						class="min-h-[200px]"
						style="height: 100%; width: 100%"
						variant="image" />
				</el-col>
			</el-row>
		</template>
	</el-skeleton>
</template>
