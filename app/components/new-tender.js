import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
<<<<<<< HEAD
      tenderFormShow() {
        this.set('addNewTender', true);
      },

=======
    tenderFormShow() {
        this.set('addNewTender', true);
      },
>>>>>>> f7f0bca25582d26560c6ad5dbed7cbbb4a9b1a9a
    saveAgriculture1(){
      var params={
      companyname:this.get('companyname'),
        details:this.get('details'),
        tender_no:this.get('tender_no'),
        open_dates:this.get('open_dates'),
        close_dates:this.get('close_dates'),
        downloads:0
      };
      this.set('addNewTender', false);
      this.sendAction('saveAgriculture2', params);
<<<<<<< HEAD
    }
=======
    },
    saveHealth1(){
      var params={
      companyname:this.get('companyname'),
        details:this.get('details'),
        tender_no:this.get('tender_no'),
        open_dates:this.get('open_dates'),
        close_dates:this.get('close_dates'),
        downloads:0
      };
      this.set('addNewTender', false);
      this.sendAction('saveHealth2', params);
    },
    saveIt1(){
        var params={
        companyname:this.get('companyname'),
          details:this.get('details'),
          tender_no:this.get('tender_no'),
          open_dates:this.get('open_dates'),
          close_dates:this.get('close_dates'),
          downloads:0
        };
        this.set('addNewTender', false);
        this.sendAction('saveIt2', params);
      },
      saveSupply1(){
          var params={
          companyname:this.get('companyname'),
            details:this.get('details'),
            tender_no:this.get('tender_no'),
            open_dates:this.get('open_dates'),
            close_dates:this.get('close_dates'),
            downloads:0
          };
          this.set('addNewTender', false);
          this.sendAction('saveSupply2', params);
      },
      saveOther1(){
            var params={
            companyname:this.get('companyname'),
              details:this.get('details'),
              tender_no:this.get('tender_no'),
              open_dates:this.get('open_dates'),
              close_dates:this.get('close_dates'),
              downloads:0
            };
            this.set('addNewTender', false);
            this.sendAction('saveOther2', params);
          }
>>>>>>> f7f0bca25582d26560c6ad5dbed7cbbb4a9b1a9a
  }

});
