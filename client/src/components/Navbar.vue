<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="dark" fixed="top" >
      <b-navbar-brand href="#" to="/">
        <img src="https://placekitten.com/g/30/30" class="d-inline-block align-top" alt="Kitten">
        XUSW
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse" ></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav >

        <b-navbar-nav >
          <b-nav-item>Link</b-nav-item>
          <b-nav-item>Link with a long name </b-nav-item>
          <b-nav-item disabled>Disabled</b-nav-item>
        </b-navbar-nav>


        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto" >
          <b-nav-form>
            <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
            <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
          </b-nav-form>

          <b-nav-item-dropdown text="Lang" right>
            <b-dropdown-item href="#">EN</b-dropdown-item>
            <b-dropdown-item href="#">ES</b-dropdown-item>
            <b-dropdown-item href="#">RU</b-dropdown-item>
            <b-dropdown-item href="#">FA</b-dropdown-item>
          </b-nav-item-dropdown>

          <b-nav-item-dropdown right>
            <!-- Using 'button-content' slot -->
            <template v-slot:button-content>
              <em>User</em>
            </template>
            <b-dropdown-item href="#">Profile</b-dropdown-item>
            <b-dropdown-item href="#">Sign Out</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <b-container fluid>
      <b-row>
        <b-col cols="2">
          <div role="tablist">
              <b-card no-body class="mb-1">
                <b-card-header header-tag="header" class="p-1" role="tab">
                  <b-button block href="#" v-b-toggle.accordion-1 variant="dark">
                    概况
                  </b-button>
                </b-card-header>
                <b-collapse id="accordion-1" visible accordion="my-accordion" role="tabpanel">
                  <b-card-body>
                    <b-link href="#foo">Link</b-link>
                    <b-link href="#foo">Link</b-link>
                    <b-link href="#foo">Link</b-link>
                  </b-card-body>
                </b-collapse>
              </b-card>

              <b-card no-body class="mb-1">
                <b-card-header header-tag="header" class="p-1" role="tab">
                  <b-button block href="#" v-b-toggle.accordion-2 variant="dark">
                    用户分析
                  </b-button>
                </b-card-header>
                <b-collapse id="accordion-2" accordion="my-accordion" role="tabpanel">
                  <b-card-body>
                    <b-link href="#foo">Link</b-link>
                    <b-link href="#foo">Link</b-link>
                    <b-link href="#foo">Link</b-link>
                  </b-card-body>
                </b-collapse>
              </b-card>

              <b-card no-body class="mb-1">
                <b-card-header header-tag="header" class="p-1" role="tab">
                  <b-button block href="#" v-b-toggle.accordion-3 variant="dark">
                    留存分析
                  </b-button>
                </b-card-header>
                <b-collapse id="accordion-3" accordion="my-accordion" role="tabpanel">
                  <b-card-body>
                    <div>
                      <b-button variant="link">Link</b-button>
                    </div>
                    <div>
                      <b-button variant="link">Link</b-button>
                    </div>
                  </b-card-body>
                </b-collapse>
              </b-card>
            </div>
        </b-col>
        <b-col cols="10">

        </b-col>
      </b-row>
    </b-container>
  </div>

</template>

<script>
export default {
  name: 'Navbar',
  data() {
    return {
      text: 'xushiwei',
    };
  },
};
</script>

<style>
</style>
