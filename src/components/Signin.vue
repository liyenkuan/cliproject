<template>
<div class="container container-p">
    <Form v-slot="{ errors }" @submit="onSubmit" >
        <label for="address" class="col align-self-start">email</label>
        <Field id="email" name="email" type="email" class="form-control"
        :class="{ 'is-invalid': errors['email'] }"
        placeholder="請輸入 Email" rules="email|required"
        v-model="user.email"></Field>
        <error-message name="email" class="invalid-feedback"></error-message>
        <label for="address" class="form-label">地區</label>
        <Field id="name" name="地區" class="form-control" :class="{ 'is-invalid': errors['地區'] }"
        placeholder="請輸入地區" rules="required"
            v-model="user.region" as="select">
            <option value="">請選擇地區</option>
            <option value="台北市">台北市</option>
            <option value="高雄市">高雄市</option>
    </Field>
    <div class="mb-3">
    <label for="address" class="form-label">電話</label>
    <Field id="address" name="電話" type="text" class="form-control"
    :class="{ 'is-invalid': errors['電話'] }"
            placeholder="請輸入電話" :rules="isPhone" v-model="user.phone">
            </Field>
    <error-message name="電話" class="invalid-feedback"></error-message>
    </div>
        </Form>
</div>
</template>